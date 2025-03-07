import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes, query, dataRoutes } from './routes';
import { createStaticRouter } from 'react-router';
// import { getCats } from './pages/Home';

// Типы для запроса
type RequestHandler = {
  url: string;
  query: string;
};

// Создаем сервер
const app = express();

// Обработчик для рендеринга страницы
app.all('*', async (req: RequestHandler, res) => {
  try {
    // Получаем данные для маршрута
    const context = await query(req); 

    // Если в контексте есть ошибка, сразу отправляем её
    if (context instanceof Response) {
      return res.send(context);
    }

    const router = createStaticRouter(dataRoutes, context);

    // Рендерим HTML
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </StaticRouter>
    );

    // Отправляем HTML на клиент
    res.status(context.statusCode).send(`<!DOCTYPE html>${html}`);
  } catch (error) {
    console.error('Error during SSR:', error);
    res.status(500).send('Server Error');
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
