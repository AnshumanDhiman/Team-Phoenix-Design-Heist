import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar'
import Cards from './Components/Cards/Cards'
import Page3 from './Components/page3/page3'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Page3 />
      <Cards />
    </div>
  );
}

export default App;
