import { useState } from "react";
import "./App.css";

import Form from "./Components/Form/Index";

function App() {
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
  const [info, setInfo] = useState(initialInfo);
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
