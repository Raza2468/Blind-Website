
import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { DiyZone } from "./components/Diyzon/DiyZone";
import { Dressing } from "./components/Dressin/Dressing";
import { Contact } from "./components/Contact/ContactUs";
import { Product } from "./components/Product/Product";

function App() {
  return (
    <>
      <Router>
        <div className="pages">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Product" component={Product} />
            <Route path="/Dressing" component={Dressing} />
            <Route path="/DiyZone" component={DiyZone} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;