import Navbar from './Components/Navbar';
import { routes } from './Services/Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import ToggleDarkMode from './Components/ToggleDarkMode';
import { useContext, useEffect } from 'react';
import { Context } from './Context/Context';

import './App.scss';

function App() {
  const { dM, dataTheme, setDataTheme } = useContext(Context);

  useEffect(() => {
    dM ? setDataTheme('Dark') : setDataTheme('Light');
  }, [dM])

  return (
    <Router>
      <div className="App" data-theme={ dataTheme }>
        <Navbar />
        <ToggleDarkMode />
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
      </div>
    </Router>
  );
}

export default App;
