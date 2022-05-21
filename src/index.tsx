import ReactDOM from "react-dom/client";
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";
import MainApp from "./appComponents/mainApp/mainApp";
import LoginPage from "./appComponents/loginPage/loginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainApp />} />
          <Route index element={<MainApp />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
