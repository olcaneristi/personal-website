import './styles/index.scss';
import Navbar from './components/Navbar';
import Layout from './containers/Layout';
import { Footer } from './containers';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/404';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export const initGA = () => {
  const TRACKING_ID = 'G-13NNJ1F84N';
  ReactGA.initialize(TRACKING_ID); // put your tracking id here
  ReactGA.pageview(window.location.pathname + window.location.search);
};
function App() {
  useEffect(() => {
    initGA();
  }, []);

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
