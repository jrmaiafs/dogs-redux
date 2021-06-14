import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import TLoginForm from "./TLoginForm";
// import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import styles from "./Login.module.css";
import NotFound from "../../NotFound";

const Login = () => {
  return (
    <section className={`${styles.login} container`}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<TLoginForm />} />
          {/* <Route path="/" element={<LoginForm />} /> */}
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
