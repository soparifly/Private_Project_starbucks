import "./App.css";
import AppContextProvider from "./context/AppContextProvider";
import MainItem from "./comp/MainItem";
import Header from "./comp/Header";
import MainNav from "./comp/MainNav";
import Footer from "./comp/Footer";
import {
  Home,
  Custom,
  Free,
  Gallery,
  Join,
  Login,
} from "./comp/item/CompsItems.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <MainItem header={<Header />} footer={<Footer />} nav={<MainNav />}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route path="/custom" element={<Custom />} />
              <Route path="free" element={<Free />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="login" element={<Login />} />
              <Route path="join" element={<Join />} />
            </Routes>
          </MainItem>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
