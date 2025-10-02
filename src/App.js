
import './App.css';
import Footer from './Components/Footer'
import React, { useState, useEffect } from "react";
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Books from "./Pages/Books"
import { books } from "./data"

function App() {
  const [cart, setCart] = useState([]);
  
function addToCart(book) {
  const dupeItem = cart.find(item => +item.id === +book.id)
  if (dupeItem) {
    dupeItem.quantity +=1;
  }
  setCart([...cart, {...book, quantity: 1}])
}

useEffect (() => {
//  console.log(cart)
}, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='books' exact render={() => <Books books={books} />}/>
        <Route path='/books/:id' render={() => <BookInfo books={books} addToCart={addToCart} />} />
       <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
