import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";

const TLoginForm = () => {
  const username = useForm();
  const password = useForm();

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state);
  const loading = user.loading || token.loading;
  const error = user.error || token.error;

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <div>
        <Head title="Login" description="rota para afetuar login" />
        <h2 className="title">Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="text" label="E-mail" name="username" {...username} />
          <Input type="password" label="Senha" name="password" {...password} />
          <Error error={error} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
        </form>
        <div className={styles.cadastre}>
          <p>Ou Cadastre-se</p>
          <Link to="/login/criar" className={styles.Bcadastro}>
            <p>🠖</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TLoginForm;
