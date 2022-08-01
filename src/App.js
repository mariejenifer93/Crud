import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import './App.css';
import Home from './home'
import SignupForm from './signUpForm';
import Crud from './CRUD';
import Todo from './todo';
import Notfound from "./notfound";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="SignupForm" element={<SignupForm />} />
          <Route exact path="crud" element={<Crud/>}/>
          <Route exact path="todo" element={<Todo/>}/>         
          <Route path='*' element={<Notfound />} />
        </Routes>    
        {/* <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="SignupForm">Page 1</Link></li>
          </ul>
        </div>    */}
      </Router>
    </div>
  );
}

export default App;