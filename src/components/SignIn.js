import react, { useState } from "react";

const SignIn = ({ signin, error }) => {
  /*const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [keep, setKeep] = useState(false);
*/
  const [details, setDetails] = useState({
    login: "",
    password: "",
    keep: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    signin(details);
  };

  return (
    <div className="sign-in-card" onClick={(e) => e.stopPropagation()}>
      <h1>Вход</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Логин"
          className="input-field"
          value={details.login}
          onChange={(e) => setDetails({ ...details, login: e.target.value })}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="input-field"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
        <div className="sign-in-checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            value={details.keep}
            onChange={(e) => setDetails({ ...details, keep: e.target.value })}
          />
          <p>Запомнить</p>
        </div>
        <button type="submit" className="sign-in-btn">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
