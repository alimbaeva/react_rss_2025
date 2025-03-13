import { Provider } from "react-redux";
import App from "./App";
import { Layout } from "./Layout";
import { store } from "./store/store";

export default function Root() {
  return (
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  )
}
