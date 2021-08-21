import SignIn from "./SignIn";

const SignInModalWindow = ({ active, setActive, signin, error }) => {
  return (
    <div
      className={active ? "sign-in-container active" : "sign-in-container"}
      onClick={() => setActive(false)}
    >
      <SignIn signin={signin} error={error} />
    </div>
  );
};

export default SignInModalWindow;
