const InputReq = ({ name, title, type, value, setState }) => {
  return (
    <>
      <label htmlFor={`input-${name}`} className="texto texto-hover">
        {title}
      </label>
      <input
        type={type}
        className="texto input__geral"
        name={`input-${name}`}
        value={value || ""}
        onChange={(event) => setState(event.target.value)}
        required
      />
    </>
  );
};

export default InputReq;
