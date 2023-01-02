import React from "react";
import { Route, Routes} from 'react-router-dom';
import ItemCard from "./itemsList";
import Navbar from "./navbar";
import Login from "./login";
import Home from "./home";
import Signup from "./signup";
import Product from "./productDisplay";

function App() {
  const [apiRes, setApiRes] = React.useState("ok");

  React.useEffect( () => {
    fetch('http://localhost:9000/testapi')
    .then(res => res.text())
    .then(res => setApiRes(res))
    .catch(err => console.log('from me >>> ', err))
  });
    
  return (
    <div className="App">
    <Navbar />
    <section className="main-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>ABOUT</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<ItemCard />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
    </section>

    <section className="filters">
      <input type='text'/>
    </section>

      <p>this is a message from the backend </p>
      <h4>{apiRes}</h4>
    </div>
  );
}

export default App;
