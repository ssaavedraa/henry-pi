import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/landing/lading-page.component';
import Nav from './components/navbar/navbar.component.jsx'

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path ='/' element={<Landing/>} />
        <Route exact path='/home' element={<Nav/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
