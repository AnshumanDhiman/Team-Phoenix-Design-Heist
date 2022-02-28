import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Cards from './Components/Cards/Cards'
import Page3 from './Components/page3/page3'


function App() {
  return (
    <div >
       <Navbar />
       <BrowserRouter>
       <Switch>
       <Route path="/buy" component={Page3} />
       <Cards />
       </Switch>
       </BrowserRouter>

  
    </div>
  );
}

export default App;
