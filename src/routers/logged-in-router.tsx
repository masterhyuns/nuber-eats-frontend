import { isLoggedInVar } from "../apollo";

const LoggedInRouter = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };
  return (
    <div>
      <h1 onClick={onClick}>LoggedInRouter</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default LoggedInRouter;
