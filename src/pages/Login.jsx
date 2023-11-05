import { signUpLoginWithGoogle } from "../firebase/firebaseConfig";
import { addUser } from "../redux/features/unsplashSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.unsplash);
  const signUpLogin = () => {
    signUpLoginWithGoogle()
      .then((user) => {
        dispatch(addUser(user.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {!user && (
        <h1 className="text-center text-4xl font-bold mb-10">
          Login with Google
        </h1>
      )}
      {user && (
        <>
          <div className="avatar mb-5">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-5">{user.displayName}</h1>
        </>
      )}
      <button
        onClick={signUpLogin}
        className=" font-bold btn btn-outline btn-success min-w-[220px]"
      >
        SignUp / Login
      </button>
    </div>
  );
}

export default Login;
