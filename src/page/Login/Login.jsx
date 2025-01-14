import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  console.log(import.meta.env.VITE_apiKey);
  const { creatuser,name } = useContext(AuthContext);

  const handealSubmit = e => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    creatuser(email, password)
      .then(res => {
      console.log(res.user)
    })
  };
  return (
    <div>
      <label>
        <form onSubmit={handealSubmit}>
          <input name="email" type="email" placeholder="email" />
          <input name="password" type="password" placeholder="pass" />
          <input type="submit" />
        </form>
      </label>
    </div>
  );
};

export default Login;
