// import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Unfound } from './components/Unfound';
import  AddProducts  from './components/AddProducts';
import { Cart } from "./components/Cart";
import NotFound from "./components/NotFound";
import aboutUs from "./components/aboutUs";
import contactUs from "./components/contactUs";
import Footer from "./components/Footer"
function App() {
  let userEmail = localStorage.getItem("userEmail")
  console.log(userEmail)

  const renderAddProducts = () => {
    if (userEmail === 'nasir@gmail.com') {
      return <AddProducts />;
    } else {
      return <NotFound />;
    }
  };  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home } />
          <Route path='/signup' Component={Signup} />
          <Route path='/login' Component={Login} />
          <Route path="/add-products" Component={renderAddProducts} />
          <Route path="/Cart" Component={Cart} />
          <Route Component={Unfound}/>
          <Route exact path="aboutus" Component={aboutUs} />
          <Route exact path="contactus" Component={contactUs} />
                    
        </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
