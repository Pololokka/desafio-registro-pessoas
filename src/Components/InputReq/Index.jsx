const InputReq = ({ name, title, type, value, info, setState }) => {
  return (
    <>
      <label htmlFor={name} className="texto texto-hover">
        {title}
      </label>
      <input
        type={type}
        className="texto input__geral"
        name={name}
        value={value}
        onChange={(event) => setState({ ...info, [name]: event.target.value })}
        required
      />
    </>
  );
};

export default InputReq;
