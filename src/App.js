import './styles/index.scss';
import Navbar from './components/Navbar';
import Layout from './containers/Layout';
import { Footer } from './containers';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/404';

function App() {
  return (
    <main className="website">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
