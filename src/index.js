import react from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"

/*
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 5,
    photoName: "pizza/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    // photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    // photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    // photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/pizza/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Welcome to our pizza menu</h1>
    </header>
  );
}
function Main() {
  return (
    <main className="main">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </main>
  );
}
function Footer() {

  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  return (
    <footer>
      {isOpen ? <Order openHour={hour} closeHour={close} /> : `we are close`}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
 
  return (
    <p>
      we are currently now {openHour}:00 untill {closeHour}:00 we close
    </p>
  );
}
function Pizza({pizzaObj}) {
  return (
    <div className={`pizza_container ${pizzaObj.soldOut ? `sold_out`:``}`} >
      <div className="pizza_row">
        <img
          className="pizza_photo"
          src={pizzaObj.photoName}
          alt={pizzaObj.name}
        ></img>
        <div>
          <h1>{pizzaObj.name}</h1>
          <p>{pizzaObj.ingredients}</p>
          <p>{pizzaObj.soldOut ? `Sold out`:<span>
            {pizzaObj.price}
           </span>}</p>
        </div>
      </div>
    </div>
  );
}

const mySkill = [
  {
    skill: `javascript`,
    level: `advance`,
    color: `#FF5810`,
  },
  {
    skill: `Html`,
    level: `bigginer`,
    color: `#60DAFB`,
  },
  {
    skill: `css`,
    level: `intermidiate`,
    color: `#FF3800`,
  },
  {
    skill: `react`,
    level: `advance`,
    color: `#C3DCAF`,
  },
];

function App() {
  return (
    <>
      <div className="card">
        <div className="image">
          <Avater></Avater>
        </div>
        <Text></Text>
        <div className="skillLevel">
          <SkillList />
        </div>
      </div>
    </>
  );
}
function Avater() {
  return (
    <>
      <img className="photo" src="\pizza\prosciutto.jpg" alt="pizza"></img>
    </>
  );
}
function Text() {
  return (
    <>
      <h1>Hello Divine</h1>
    </>
  );
}
function SkillList() {
  return (
    <>
      {mySkill.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.color}
        />
      ))}
    </>
  );
}
function Skill({ skill, level, color }) {
  return (
    <>
      <div className="showskill" style={{ background: color }}>
        <p>{skill}</p>
        <p>{level}</p>
      </div>
    </>
  );
}
*/




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
