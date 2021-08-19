  
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { DiyZone } from "./components/Pages/DiyZone";
import { Dressing } from "./components/Pages/Dressing";
import { Contact } from "./components/Pages/ContactUs";
import { Product } from "./components/Pages/Product";

function App() {
  return (
    <>
      <Router>
        <Header />

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