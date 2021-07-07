import React from "react";
import "./style.scss";
import InputText from "../../components/InputText";
import InputCheckbox from "../../components/InputCheckbox";
import Button from "../../components/Button";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmError, setConfirmError] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setConfirmError(false);

    let error = false;

    if (!email) {
      setEmailError(true);
      error = true;
    }

    if (!password) {
      setPasswordError(true);
      error = true;
    }

    if (!confirm) {
      setConfirmError(true);
      error = true;
    }

    if (error) {
      return;
    }

    console.log(
      `You are now logged in! E-mail: ${email}, Password: ${password}`
    );
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h2 className="login__title">Přihlašte se</h2>
        <div className="login__textinput-wrapper">
          <InputText
            value={email}
            label="E-mail"
            onValueChange={(value: string) => setEmail(value)}
            error={emailError}
          />
        </div>
        <div className="login__textinput-wrapper">
          <InputText
            value={password}
            label="Password"
            onValueChange={(value: string) => setPassword(value)}
            error={passwordError}
            type="password"
          />
        </div>
        <div className="login__checkboxinput-wrapper">
          <InputCheckbox
            value={confirm}
            label="Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajlů."
            onValueChange={() => setConfirm(!confirm)}
            error={confirmError}
          />
        </div>
        <Button type="submit" text="Přihlásit se" fullwidth />
      </form>
    </div>
  );
};

export default Login;
