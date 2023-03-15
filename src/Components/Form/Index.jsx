import "./Styles.css";

import Input from "../Input/Index";
//import InputReq from "../InputReq/Index";
import InputRadio from "../InputRadio/Index";

const Form = ({ info, setInfo, handleUpdate }) => {
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
          value={info.name}
          required={false}
          setState={setInfo}
          info={info}
        />
        <Input
          name="age"
          title="Idade"
          type="number"
          value={info.age}
          required={true}
          setState={setInfo}
          info={info}
        />
        <Input
          name="gender"
          title="Genero"
          type="text"
          value={info.gender}
          required={true}
          setState={setInfo}
          info={info}
        />
        <Input
          name="email"
          title="E-mail"
          type="text"
          value={info.email}
          required={true}
          setState={setInfo}
          info={info}
        />
        <Input
          name="cpf"
          title="CPF"
          type="number"
          value={info.cpf}
          required={false}
          setState={setInfo}
          info={info}
        />
        <Input
          name="genreF"
          title="Gênero favorito de filme ou série"
          type="text"
          value={info.genreF}
          required={true}
          setState={setInfo}
          info={info}
        />
        <Input
          name="genreS"
          title="Segundo gênero favorito de filme ou série"
          type="text"
          value={info.genreS}
          required={true}
          setState={setInfo}
          info={info}
        />
        <Input
          name="genreT"
          title="Terceiro gênero favorito de filme ou série"
          type="text"
          value={info.genreT}
          required={true}
          setState={setInfo}
          info={info}
        />
        <div className="form-radio">
          <p className="texto">Qual sua preferência?</p>
          <div
            className="form-radio__input"
            onChange={(event) => setInfo({ ...info, pref: event.target.value })}
          >
            <InputRadio
              options={[
                { title: "Longas", value: "feature", name: "pref" },
                { title: "Curtas", value: "short", name: "pref" },
                { title: "Série", value: "show", name: "pref" },
                {
                  title: "Mini-Série",
                  value: "mini-series",
                  name: "pref",
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
