import "./index.css";
import reactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import App from "./App";
const el = document.getElementById("root");
const root = reactDom.createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
