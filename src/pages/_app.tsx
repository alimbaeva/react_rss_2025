
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";
import { useTheme } from "@/components/context/useSearch";
import { store } from "@/store/store";
import { ThemeProvider } from "@/components/context/ThemeContext ";
import { ReactElement } from "react";

const MainContent = ({children} : {children: ReactElement}) => {
  const { theme } = useTheme();

  return (
    <main className={theme === "light" ? "light" : "dark"}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<p>Colling error ...</p>}>
      <Provider store={store}>
        <ThemeProvider>
          <MainContent>
            <Component {...pageProps} />
          </MainContent >
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}