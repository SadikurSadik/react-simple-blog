import { BrowserRouter, Route, Routes } from "react-router-dom";
import ByCategoryPage from "./pages/ByCategoryPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/by-category/:categoryId" element={<ByCategoryPage />} />
          <Route path="/blog-detail/:postId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
