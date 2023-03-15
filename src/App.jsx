import { useState } from "react";
import "./App.css";

import Form from "./Components/Form/Index";
let initialInfo = {
  name: "",
  age: "",
  gender: "",
  email: "",
  cpf: "",
  genreF: "",
  genreS: "",
  genreT: "",
  pref: "",
};
let formShow = true;
function App() {
  const [info, setInfo] = useState(initialInfo);
  const [className, setClassName] = useState({
    class1: "show",
    class2: "hide",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    if (formShow === true) {
      formShow = false;
      setClassName({
        class1: "hide",
        class2: "show",
      });
    } else {
      formShow = true;
      setClassName({
        class1: "show",
        class2: "hide",
      });
      setInfo(initialInfo);
    }
  };

  return (
    <div className="App">
      <div className={className.class1}>
        <Form info={info} setInfo={setInfo} handleUpdate={handleUpdate} />
      </div>
      <div className={className.class2}>
        <div className="card__thanks">
          <p className="subtitulo subtitulo-hover">Obrigado por participar!</p>
          <p className="texto">Abaixo estão suas respostas</p>

          <div className="answer__grid">
            <p className="texto">Nome: {info.name}</p>
            <p className="texto">Idade: {info.age}</p>
            <p className="texto">Gênero: {info.gender}</p>
            <p className="texto">Email: {info.email}</p>
            <p className="texto">Cpf: {info.cpf}</p>
            <p className="texto">Gênero Favorito: {info.genreF}</p>
            <p className="texto">Segundo Gênero Favorito: {info.genreS}</p>
            <p className="texto">Terceiro Gênero Favorito: {info.genreT}</p>
            <p className="texto">Preferência: {info.pref}</p>
          </div>

          <input
            type="button"
            value="Refazer pesquisa"
            onClick={handleUpdate}
            className="texto btn__geral"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
