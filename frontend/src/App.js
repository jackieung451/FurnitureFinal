import React, { useEffect, useState, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages";
import "./styles.css";
import i18n from "./translations/i18n";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Blog from "./components/Blog";
import History from "./pages/History";
import HistoryBackground from "./components/HistoryBackground";
import BlogDetail from "./components/BlogDetail";
import BlogCategory from "./components/BlogCategory";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/history" exact component={History} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/blog/category/:id" exact component={BlogCategory} />
        <Route path="/blog/:id" exact component={BlogDetail} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
