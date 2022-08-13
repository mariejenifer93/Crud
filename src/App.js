import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import './App.css';
// import Home from './home'
import SignupForm from './signUpForm';
// import Crud from './CRUD';
import Todo from './todo';
import Notfound from "./notfound";
import Crudcreate from './Components/CRUD';
import Update from './Components/update';
import Read from './Components/read';
import View from "./Components/view";
import Login from "./login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="SignupForm" element={<SignupForm />} />
          {/* <Route exact path="crud" element={<Crud/>}/> */}
          <Route exact path="Crudcreate" element={<Crudcreate/>}/>
          <Route exact path="Update" element={<Update/>}/>
          <Route exact path="Read" element={<Read/>}/>
          <Route exact path="view" element={<View/>}/>
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