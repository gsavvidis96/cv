import ReactDOM from "react-dom/client";
import "./index.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import App from "./App";

dayjs.extend(utc);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
