import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Fotter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Women from "./components/Pages/Women";
import Men from "./components/Pages/Men";
import Sale from "./components/Pages/Sale";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import Cart from "./components/Pages/Cart";
import ProductDetailsWomen from "./components/Pages/ProductDetailsWomen";
import productDetailsMen from "./components/Pages/ProductDetailsMen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/women" component={Women} />
          <Route exact path="/men" component={Men} />
          <Route path="/sale" component={Sale} />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/cart" component={Cart} />
          <Route path="/women/:id" component={ProductDetailsWomen} />
          <Route path="/men/:id" component={productDetailsMen} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
