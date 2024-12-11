import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';

export default tseslint.config(
  { ignores: ['dist'] }, // игнорируются файлы и папки, указанные в массиве
  {
    //в ESLint используется для наследования готовых наборов правил из различных конфигураций
    extends: [
      js.configs.recommended, // Избегать неиспользуемых переменных Указывать явное сравнение (=== вместо ==) Запрет на использование недопустимого синтаксиса
      ...tseslint.configs.strict,  // набор правил добавляет рекомендации для более строгого контроля типизации и улучшенной поддержки TypeScript
      eslintPluginPrettier,  // автоматически синхронизирует правила форматирования Prettier и ESLint, предотвращая конфликты
    ],
    files: ['**/*.{ts,tsx}'], // files в ESLint конфигурации указывает, какие файлы должны быть обработаны линтером
    languageOptions: { // ESLint задает параметры языка и окружения, которые определяют, какой синтаксис JavaScript доступен и какие глобальные переменные можно использовать без объявления
      ecmaVersion: 2020, // ESLint должен использовать синтаксис ECMAScript 2020 (ES11) ?. ?? 
      globals: globals.browser, // globals.browser из пакета globals автоматически регистрирует все эти переменные как доступные
    },
    plugins: { // в конфигурации ESLint определяет дополнительные плагины, которые расширяют возможности линтера
      react, // Проверка правильности типов props Запрет на использование устаревших методов жизненного цикла
      'react-hooks': reactHooks, // Вызывать хуки только на верхнем уровне компонентов Гарантировать, что зависимости в массиве для хуков вроде useEffect корректны
      'react-refresh': reactRefresh, // гарантирует, что только компоненты экспортируются, что необходимо для правильной работы Hot Module Replacement
      'react-compiler': reactCompiler, // полезно для проверок, связанных с безопасностью и корректностью во время рендеринга
    },
    rules: { // в конфигурации ESLint позволяет настроить поведение линтера, задавая правила для различных аспектов кода
      ...reactHooks.configs.recommended.rules, // Хуки должны быть вызваны на верхнем уровне компонента.
      'react-refresh/only-export-components': [ // гарантирует, что только React-компоненты экспортируются из модуля
        'warn', // предупреждает об экспорте чего-то, что не является компонентом, что необходимо для корректной работы Hot Module Replacement (HMR)
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error', // проверяет, что компоненты и их JSX корректно компилируются
      ...react.configs.recommended.rules, // рекомендации по написанию хороших React-компонентов
      ...react.configs['jsx-runtime'].rules, // связанные с новым JSX-форматом, который использует JSX-автоматическую трансформацию
    },
    settings: { // используется для указания настроек, которые влияют на работу плагинов и правил
      react: {
        version: 'detect', // автоматически определит установленную версию React
      },
    },
  }
);
