import "./App.css";
import user from "./assets/user.avif";

function App() {
  return (
    <div className="container">
      <div className="container__card">
        <img src={user} className="card__avatar" alt="user" />
        <h2 className="card__name">Jessica Randall</h2>
        <p className="card__ubication">London, United Kingdom</p>
        <p className="card__description">
          "Front-end developer and avid reader."
        </p>
        <button className="card__button">GitHub</button>
        <button className="card__button">Frontend Mentor</button>
        <button className="card__button">LinkedIn</button>
        <button className="card__button">Twitter</button>
        <button className="card__button">Instagram</button>
      </div>
    </div>
  );
}

export default App;
