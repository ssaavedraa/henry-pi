import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/landing/lading-page.component';
import Countries from './components/countries/countries';
import Details from './components/details/details.component';
import Create from './components/create/create.component';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path ='/' element={<Landing/>} />
        <Route exact path='/home' element={<Countries/>} />
        <Route exact path='/country/:countryId' element={<Details />} />
        <Route exact path='/activity/create' element={<Create />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
