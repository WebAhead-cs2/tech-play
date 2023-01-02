import React from "react";
import ItemCard from "./itemsList";
import Navbar from "./navbar";
import { Route, Routes} from 'react-router-dom';
import Login from "./login";
import Home from "./home";
// import Signup from "./signup";


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
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>ABOUT</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<ItemCard />} />
      </Routes>
    </div>

      <p>this is a message from the backend </p>
      <h4>{apiRes}</h4>
    </div>
  );
}

export default App;
