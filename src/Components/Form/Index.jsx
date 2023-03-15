import "./Styles.css";

import Input from "../Input/Index";
import InputReq from "../InputReq/Index";
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
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="age"
          title="Idade"
          type="number"
          value={info.age}
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="gender"
          title="Genero"
          type="text"
          value={info.gender}
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="email"
          title="E-mail"
          type="text"
          value={info.email}
          setState={setInfo}
          info={info}
        />
        <Input
          name="cpf"
          title="CPF"
          type="number"
          value={info.cpf}
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="genreF"
          title="Gênero favorito de filme ou série"
          type="text"
          value={info.genreF}
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="genreS"
          title="Segundo gênero favorito de filme ou série"
          type="text"
          value={info.genreS}
          setState={setInfo}
          info={info}
        />
        <InputReq
          name="genreT"
          title="Terceiro gênero favorito de filme ou série"
          type="text"
          value={info.genreT}
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
