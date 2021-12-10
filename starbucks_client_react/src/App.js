import "./App.css";
import MainItem from "./comp/MainItem";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const content = "HI";
  return (
    <div className="App">
      <Router>
        <MainItem header={<Header />} footer={<Footer />}>
          <h1>{content}</h1>
        </MainItem>
      </Router>
    </div>
  );
}

export default App;
