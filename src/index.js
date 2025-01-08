import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}


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
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    return <header className="header">
        <h1>Fast React Pizza Co.</h1>

    </header>
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All
                    from our stone oven, all organic, all delicious.</p>
                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
            </>
                : <p>We are still working in our menu please come back later :)</p>}


            {/*<Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese'
            photoName='pizzas/spinaci.jpg' price='10' />

        <Pizza name='Focaccia' ingredients='Bread with italian olive oil and rosemary'
            photoName='pizzas/focaccia.jpg' price={6} /> */}

        </main>
    )
}
function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            < img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li >)
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log("is open")
    // if (hour >= openHour && hour <= closeHour) alert("the shop is open!");
    // else alert("the shop is closed");
    return <footer className="footer">
        {isOpen ? (
            <Order closeHour={closeHour} />
        ) : <p>We are happy to welcome you between {openHour}:00 & {closeHour}:00 come visit us</p>
        } </footer>
}

function Order({ closeHour, openHour }) {
    return <div className="order">
        <p>We are currenlty open from {openHour}until {closeHour}:00 come visit us or order online! </p>
        <button className="btn"> Order  </button>
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

