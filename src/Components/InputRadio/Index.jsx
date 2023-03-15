const InputRadio = ({ options }) => {
  return (
    <>
      {options.map((element) => {
        return (
          <div key={element.index}>
            <label htmlFor="input-pref" className="texto">
              {element.title}
            </label>
            <input
              type="radio"
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
