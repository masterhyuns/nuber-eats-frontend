import { useForm } from "react-hook-form";
interface ILoginForm {
  email?: string;
  password?: string;
}
const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = () => {};
  const onValid = () => {};
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-screen-sm max-w-lg py-10 rounded-lg text-center">
        <h3 className="font-bold text-3xl text-gray-800">Log In</h3>
        <form
          className="grid gap-3 mt-5 px-5"
          onSubmit={handleSubmit(onSubmit, onValid)}
        >
          <input
            ref={register({ required: "Email is required" })}
            type="text"
            required
            name="email"
            placeholder="email"
            className="input"
          />
          {errors.email?.message && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
          <input
            ref={register({ required: "Password is required", minLength: 10 })}
            required
            name="password"
            type="password"
            placeholder="password"
            className="input"
          />
          {errors.password?.message && (
            <span className="text-red-500">{errors.password?.message}</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500">
              Password must be more than 10 chars.
            </span>
          )}

          <button className="mt-3 btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
