// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Unfound } from './components/Unfound';
import  AddProducts  from './components/AddProducts';
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path='/signup' Component={Signup} />
          <Route path='/login' Component={Login} />
          <Route path='/add-products' Component={AddProducts} />
          <Route path="/Cart" Component={Cart} />
          <Route Component={Unfound}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
