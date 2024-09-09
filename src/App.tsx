import React from "react";
import { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";

// строгая типизация

let pizza: string = "Salami";
let price: number = 20;
let atStock: boolean = true;
let pizzas: string[] = ["Salami", "Saussage"];
let number: number[] = [1, 2, 3, 4, 5, 6];

// Типы
type Order = {
  title: string;
  quantity?: number;
};

const order: Order = {
  title: "margarita",
  quantity: 10,
};

const orders: Order[] = [
  { title: "margarita" },
  { title: "margarita", quantity: 10 },
];

let numBer: null | number = null;
numBer = 15;

type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};
// Интерфейсы

interface Auto {
  country: string;
}
interface BMW extends Auto {
  model: string;
  year: number;
}
interface MyOrder {
  title: string;
  quantity?: number;
}

const bmw: BMW = {
  model: "5",
  year: 2024,
  country: "Russia",
};

// Функции
type PrintTitle = (title: string) => string;

const printTitle: PrintTitle = (title) => {
  return title;
};
printTitle("Makaron");

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState([]);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша Пиццерия</span>
        <AddPizzaForm />
      </div>
    </div>
  );
};

export default App;
