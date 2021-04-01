import './css/main.css';
import Home from './page/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DataTable from './page/DataTable';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/data-to-table">
            <DataTable />
          </Route>
          <Route path="*">
            <div className="flex h-screen flex-col items-center justify-center">
              <h1 className="font-semibold text-6xl">404</h1>
              <Link to="/">
                <p className="text-primary-blue">Back to Home</p>
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
