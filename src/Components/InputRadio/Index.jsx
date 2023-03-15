import "./Style.css";

const InputRadio = ({ options, checkedRadio, setCheckedRadio }) => {
  const { isChecked } = checkedRadio;
  return (
    <>
      {options.map((element) => {
        return (
          <div key={Math.random()} className="video-killed-the-radio-card">
            <label htmlFor="input-pref" className="texto">
              {element.title}
            </label>
            <input
              type="radio"
              checked={isChecked === element.title}
              onClick={() => setCheckedRadio({ isChecked: element.title })}
              name={element.name}
              value={element.value}
              required
            />
          </div>
        );
      })}
    </>
  );
};

export default InputRadio;
