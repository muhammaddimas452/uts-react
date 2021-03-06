import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';
import Surat from './component/daftarsurat/surat';
import Ayat from './component/daftarayat/ayat';

function App() {
  return (
    <div>
      <Switch>
        <Dashboard>
          <Route path="/" exact component={Surat}/>
        </Dashboard>
        <Route path="/" exact component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
