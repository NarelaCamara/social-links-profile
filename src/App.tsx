import { useState } from "react";
import "./App.css";
import user from "./assets/user.avif";

function App() {
  const [click, setClick] = useState(0);


  return (
    <div className="container">
      <div className="container__card">
        <img src={user} className="card__avatar" alt="user" />
        <h2 className="card__name">Jessica Randall</h2>
        <p className="card__ubication">London, United Kingdom</p>
        <p className="card__description">
          "Front-end developer and avid reader."
        </p>
        <button
          onClick={() => setClick(1)}
          className={`${
            click === 1 ? "card__button__green" : "card__button__black"
          } card__button`}
        >
          GitHub
        </button>
        <button
          onClick={() => setClick(2)}
          className={`${
            click === 2 ? "card__button__green" : "card__button__black"
          } card__button`}
        >
          Frontend Mentor
        </button>
        <button
          onClick={() => setClick(3)}
          className={`${
            click === 3 ? "card__button__green" : "card__button__black"
          } card__button`}
        >
          LinkedIn
        </button>
        <button
          onClick={() => setClick(4)}
          className={`${
            click === 4 ? "card__button__green" : "card__button__black"
          } card__button`}
        >
          Twitter
        </button>
        <button
          onClick={() => setClick(5)}
          className={`${
            click === 5 ? "card__button__green" : "card__button__black"
          } card__button`}
        >
          Instagram
        </button>
      </div>
    </div>
  );
}

export default App;
