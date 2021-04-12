import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SideNav from './containers/SideNav/SideNav';
import MasterData from './Pages/Masterdata/MasterData';
import Dealers from './Pages/Dealers/Dealers';
import Distributor from './Pages/Distributor/Ditributor';
import Tax from './Pages/Tax/Tax';
import DistributorOrder from './Pages/Distributor Order/DistributorOrder';

function App() {
  return (
    <Router>
      <div className='App'>
        <SideNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/master_data' component={MasterData} />
          <Route exact path='/dealer' component={Dealers} />
          <Route exact path='/distributor' component={Distributor} />
          <Route exact path='/Tax' component={Tax} />
          <Route exact path='/disrtibutorOrder' component={DistributorOrder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
