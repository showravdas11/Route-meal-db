import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbars from './components/Navbar/Navbars';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OurMenu from './components/OurMenu/OurMenu';
import About from './components/About/About';
import Quotes from './components/Quotes/Quotes';
import Restaueant from './components/Restaueant/Restaueant';
import NotFound from './components/Notfound/NotFound';

function App() {
  return (
    <div >
      {/* <Restaueant></Restaueant> */}
      <BrowserRouter>
        <Navbars></Navbars>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/menu">
            <OurMenu></OurMenu>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/quote">
            <Quotes></Quotes>
          </Route>
          <Route path="/res">
            <Restaueant></Restaueant>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
