import logo from './logo.svg';
import './App.css';
import Coach from './components/Coaches/Coach';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { AccordionButton } from 'react-bootstrap';
import About from './components/about/About';
import Footer from './components/Footer/Footer';
import Services from './components/Service/Services';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/coaches">
            <Coach></Coach>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>




    </div>
  );
}

export default App;
