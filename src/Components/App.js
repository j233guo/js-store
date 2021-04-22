import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import LogIn from '../Pages/LogIn';
import Registration from '../Pages/Registration';
import '../App.css'
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import ProductList from '../Pages/ProductList';
import ProductPage from '../Pages/ProductPage';
import SearchPage from '../Pages/SearchPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/sign-up">
                    <Registration/>
                </Route>
                <Route path="/sign-in">
                    <LogIn/>
                </Route>
                <Route path="/about-us">
                    <AboutUs/>
                </Route>
                <Route path="/contact-us">
                    <ContactUs/>
                </Route>
                <Route path="/product-list/:p" component={ProductList}/>
                <Route path="/product/:p" component={ProductPage}/>
                <Route path="/search/:category/:name" component={SearchPage}/>
            </Switch>
        </Router>        
    );
}

export default App;
