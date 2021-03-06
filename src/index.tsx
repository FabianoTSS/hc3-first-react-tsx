import ReactDOM from "react-dom/client";
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import MainApp from "./appComponents/mainApp/mainApp";
import LoginPage from "./appComponents/loginPage/loginPage";
import NonExistentPage from "./appComponents/nonExistentPage/nonExistentPage";
import TestAPI from "./appComponents/testAPI/testAPI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainApp />} />
          <Route index element={<MainApp />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="testAPI" element={<TestAPI />} />
          <Route path="*" element={<NonExistentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
