import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Components/Home";
import Store from "./Pages/Apple_Store/Store";
import SharedSlide from "./Components/SharedSlide";
import Topbar from "./Pages/Dashboard/Topbar";
import Categories from "./Pages/Dashboard/Categories";
import Product from "./Pages/Dashboard/Product";
import MacSharedLayout from "./Components/MacSharedLayout";
import IpadSharedLayout from "./Components/IpadSharedLayout";
import IphoneSharedLayout from "./Components/IphoneSharedLayout";
import AirPodSharedLayout from "./Components/AirPodSharedLayout";
import WatchSharedLayout from "./Components/WatchSharedLayout";
import TvHomeSharedLayout from "./Components/TvHomeSharedLayout";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<SharedSlide />} />
            <Route path="/mac" element={<MacSharedLayout />} />
            <Route path="/ipad" element={<IpadSharedLayout />} />
            <Route path="/iphone" element={<IphoneSharedLayout />} />
            <Route path="/airpod" element={<AirPodSharedLayout />} />
            <Route path="/watch" element={<WatchSharedLayout />} />
            <Route path="/tv" element={<TvHomeSharedLayout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
