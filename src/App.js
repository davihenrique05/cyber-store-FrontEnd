import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Hero from './components/hero';
import ProductsPage from './pages/product';
import ContactPage from './pages/contact/contact';
import ProfilePage from './pages/profile/profile';

function App() {
    return (
        <Router>
            <Hero />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    )
}

export default App;