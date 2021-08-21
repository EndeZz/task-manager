import SignInModalWindow from "./SignInModalWindow";
import UserNameDisplay from "./UserNameDisplay";
import { useState, useEffect } from "react";

const loggedInUserKey = "liu";

const adminUser = {
  login: "admin",
  name: "Константин К.",
  password: "admin",
};

const initialUser = { login: "", name: "" };

const Header = () => {
  const [signInModalActive, setSignInModalActive] = useState(false);

  useEffect(() => {
    const loggedInUserString = localStorage.getItem(loggedInUserKey);
    if (loggedInUserString != null && loggedInUserString.length > 0) {
      const loggedInUser = JSON.parse(loggedInUserString);
      if (loggedInUser.login && loggedInUser.name) {
        setUser(loggedInUser);
      }
    }
  }, []);

  const [user, setUser] = useState(initialUser);

  const [error, setError] = useState("");

  const signin = (details) => {
    console.log(details);

    if (
      details.login === adminUser.login &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      const loggedInUser = {
        login: details.login,
        name: adminUser.name,
      };

      localStorage.setItem(loggedInUserKey, JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setSignInModalActive(false);
    } else {
      console.log("details do not match");
    }
  };

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem(loggedInUserKey);
    setUser(initialUser);
  };

  const onChangeUserName = (userName) => {
    const newUser = { ...user, name: userName };
    setUser(newUser);
    localStorage.setItem(loggedInUserKey, JSON.stringify(newUser));
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="../images/logo.png" alt="" />
        <h1>Видеосервис</h1>
      </div>

      <form action="" className="finder">
        <input type="text" placeholder="Поиск..." className="input-field" />
        <button className="find-btn" type="submit">
          Найти
        </button>
      </form>

      {user.login !== "" ? (
        <div className="welcome-user">
          <UserNameDisplay user={user} onChangeUserName={onChangeUserName} />
          <button onClick={logout} className="sign-out-btn">
            Выйти
          </button>
        </div>
      ) : (
        <button
          className="sign-in-btn"
          onClick={() => setSignInModalActive(true)}
        >
          Войти
        </button>
      )}

      <SignInModalWindow
        active={signInModalActive}
        setActive={setSignInModalActive}
        signin={signin}
        error={error}
      />
    </div>
  );
};

export default Header;
