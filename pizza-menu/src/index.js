import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "#5364BC",
    fontSize: "35px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu </h2>

      { <ul className="pizzas">
      {pizzaData.map((pizza) => (
          (<Pizza pizzaObj= {pizza}  key= {pizza.name}/>) 
        ))}
      </ul>}

      {/* Same thing with Ternary operator
      {pizzaData.soldOut ? (<ul className="pizzas">
      {pizzaData.map((pizza) => (
          <Pizza pizzaObj= {pizza}  key= {pizza.name}/>
        ))}
      </ul>) : (<p>We are Still working on our menu. Please stay tuned!</p>)
      } */}
      
        
      {/* or just manually add every pizzas as different components
      
      <Pizza
      name="pizza Funghi"
      ingredients= "Olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients"
      price={12}
      photoName="pizzas/funghi.jpg"
      />
      <Pizza
      name="pizza spinaci"
      ingredients= "Creamy ricotta, spinach, Italian herbs, and a mixture of mozzarella and Parmesan cheeses"
      price={15}
      photoName="pizzas/spinaci.jpg"
      />
      <Pizza
      name="pizza Margherita"
      ingredients= "A bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt"
      price={20}
      photoName="pizzas/Margherita.jpg"
      />
      <Pizza
      name="pizza Foccacia"
      ingredients= "Topped with my simple no-cook pizza sauce, shredded mozzarella cheese, and deliciously crisp rows of pepperoni"
      price={14}
      photoName="pizzas/focaccia.jpg"
      />
      <Pizza
      name="pizza Prosciutto"
      ingredients= "Thin slices of salty prosciutto cotto or cooked ham, creamy mozzarella cheese, and a robust tomato sauce spread over a basic pizza dough"
      price={16}
      photoName="pizzas/prosciutto.jpg"
      />
      <Pizza
      name="pizza Salamino"
      ingredients= "Cacciatore, Rocket, Buffalo mozzarella, fresh tomatoes, pepperonies"
      price={18}
      photoName="pizzas/salamino.jpg"
      /> */}
    </main>
  );

  
}

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen ? "-> We're Open" : "We're Closed!");
  //if(hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're closed!");

  return (
    <footer className="footer">
      <Order hour={hour} openHour={openHour} closeHour={closeHour} />
    </footer>
  )
  // return (
  //   <footer className="footer">{new Date().toLocaleTimeString()} {isOpen && 
  //   <p>We are Open until {closeHour}:00.Come visit us or order online!</p>}
  //   {!isOpen && <p>We will open at {openHour}:00. Stay tuned!</p> }
  //   </footer>
  // );
  // return React.createElement('footer', null, "We're currently open!");
}

function Order({hour, openHour, closeHour}) {
  return (
    <div className="order">
      {(hour >=  openHour && hour <= closeHour  ) ?(
      <div className="order">
      <p>We are Open from {openHour}:00 until {closeHour}:00.Come visit us or order online!</p>
      <p>It is now {Date()}</p>
      <button className="btn"> Order now! </button>
      </div>
      ) :
      (<div className="order"><p>Our restaurant is closed now. It'll open at {openHour}:00</p></div>)}
    </div>
  )
}

function Pizza({pizzaObj}) {

  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src= {pizzaObj.photoName} alt= {pizzaObj.name}></img>
      <div>
      <h3> {pizzaObj.name} </h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut? "SOLD OUT" : pizzaObj.price + "$"}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />, root);



