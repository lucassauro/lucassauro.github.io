import Navbar from './Components/Navbar';
import { routes } from './Services/Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, index) => (
          <Route 
            key={ index }
            path={ route.path }
            exact={ route.exact }
            component={ route.component }  
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
