import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";
import Home from "./pages/Home";
import UpdateReviewForm from "./components/UpdateReviewForm";

function App() {
  return (
    <div className="app-main-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addreview" element={<ReviewForm/>}></Route>
         
          <Route path="/bookreview/:id" element={<UpdateReviewForm/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
