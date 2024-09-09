import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import "./styles.css";

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange", e.target);
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit", e.target);
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        name="title"
        placeholder="Название"
        onChange={handleChange}
        type="text"
        value={newPizza.title}
      />
      <input
        name="price"
        placeholder="Стоимость"
        onChange={handleChange}
        type="text"
        value={newPizza.price}
      />
      <input
        name="img"
        placeholder="Изображение"
        onChange={handleChange}
        type="text"
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
