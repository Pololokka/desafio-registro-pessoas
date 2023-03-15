import "./Styles.css";

import { useState } from "react";
import Input from "../Input/Index";
import InputReq from "../InputReq/Index";
import InputRadio from "../InputRadio/Index";

const Form = ({ info, setInfo }) => {
  const [nameForm, setNameForm] = useState("");
  const [ageForm, setAgeForm] = useState("");
  const [genderForm, setGenderForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [cpfForm, setCpfForm] = useState("");
  const [genFForm, setGenFForm] = useState("");
  const [genSForm, setGenSForm] = useState("");
  const [genTForm, setGenTForm] = useState("");
  const [prefForm, setPrefForm] = useState("");

  const handleUpdate = (event) => {
    event.preventDefault();

    setInfo({
      ...info,
      name: nameForm,
      age: ageForm,
      gender: genderForm,
      email: emailForm,
      cpf: cpfForm,
      genreF: genFForm,
      genreS: genSForm,
      genreT: genTForm,
      pref: prefForm,
    });
    console.log(info);

    //setNameForm("");
    setAgeForm("");
    setGenderForm("");
    setEmailForm("");
    setCpfForm("");
    setGenFForm("");
    setGenSForm("");
    setGenTForm("");
    setPrefForm("");
  };
  return (
    <div>
      <p className="subtitulo subtitulo-hover">Placeholder maneiro</p>
      <form
        onSubmit={(event) => handleUpdate(event)}
        className="form__container"
      >
        <Input
          name="name"
          title="Nome completo"
          type="text"
          value={nameForm}
          setState={setNameForm}
        />
        <InputReq
          name="age"
          title="Idade"
          type="number"
          value={ageForm}
          setState={setAgeForm}
        />
        <InputReq
          name="gender"
          title="Genero"
          type="text"
          value={genderForm}
          setState={setGenderForm}
        />
        <InputReq
          name="email"
          title="E-mail"
          type="text"
          value={emailForm}
          setState={setEmailForm}
        />
        <Input
          name="cpf"
          title="CPF"
          type="number"
          value={cpfForm}
          setState={setCpfForm}
        />
        <InputReq
          name="genreF"
          title="Gênero favorito de filme ou série"
          type="text"
          value={genFForm}
          setState={setGenFForm}
        />
        <InputReq
          name="genreS"
          title="Segundo gênero favorito de filme ou série"
          type="text"
          value={genSForm}
          setState={setGenSForm}
        />
        <InputReq
          name="genreT"
          title="Terceiro gênero favorito de filme ou série"
          type="text"
          value={genTForm}
          setState={setGenTForm}
        />
        <div className="form-radio">
          <p className="texto">Qual sua preferência?</p>
          <div
            className="form-radio__input"
            onChange={(event) => setPrefForm(event.target.value)}
          >
            <InputRadio
              options={[
                { title: "Longas", value: "feature", name: "input-pref" },
                { title: "Curtas", value: "short", name: "input-pref" },
                { title: "Série", value: "show", name: "input-pref" },
                {
                  title: "Mini-Série",
                  value: "mini-series",
                  name: "input-pref",
                },
              ]}
            />
          </div>
        </div>
        <input type="submit" value="Registrar!" className="texto btn__geral" />
      </form>
    </div>
  );
};

export default Form;
