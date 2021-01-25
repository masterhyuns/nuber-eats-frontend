import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import CreateAccount from "../pages/create-account";

const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default LoggedOutRouter;
/*
import { isLoggedInVar } from "../apollo";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

const LoggedOutRouter = () => {
  const { register, handleSubmit, errors } = useForm<IForm>();
  const onSubmit = () => {
    isLoggedInVar(true);
  };
  const onValid = () => {
    console.log(errors);
  };
  return (
    <div>
      <h1>LoggedOutRouter</h1>
      <form onSubmit={handleSubmit(onSubmit, onValid)}>
        <div>
          <input
            ref={register({
              required: true,
              pattern: /^[A-Za-z0-9.%+-]+@gmail.com$/,
            })}
            type="email"
            name="email"
          />
          {errors.email?.type === "required" && errors.email?.message && (
            <span className="text-red-600">{errors.email?.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-red-600">Only gmail allowed</span>
          )}
        </div>
        <div>
          <input ref={register} type="password" name="password" />
        </div>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
*/
