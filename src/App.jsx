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
function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleUpdate = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
