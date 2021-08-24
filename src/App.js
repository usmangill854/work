import Main from "./shopping/Main"

 import Navbar from "./shopping/NavBar";
import Slider from "./shopping/Slider";
import Card_Style from "./shopping/Card";
import {Button} from "bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./shopping/Home";
import Cart from "./shopping/Cart"
import Sign_In from "./shopping/Sign_in";
import Detail_page from "./shopping/Detail";



const App=()=> {
  return  <>
      <Navbar />
<Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path= "/signIn" component={Sign_In}/>
    <Route exact path="/detailPage" component= {Detail_page} />
</Router>



{/*<Main/>*/}

      {/*  <Slider/>*/}

      {/*<Card_Style/>*/}




   </>

}

export default App;
