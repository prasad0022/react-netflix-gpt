import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, NavLink } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { removeMovies, removeTrailerKey } from "../utils/store/moviesSlice";
import { removeGptMovies } from "../utils/store/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse", { replace: true });
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(removeMovies());
        dispatch(removeTrailerKey());
        dispatch(removeGptMovies());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-black flex justify-between">
      <h1 className="p-8 z-10 text-red-600 font-medium text-4xl">NetflixGPT</h1>
      {userData && (
        <div className="flex items-center gap-8 text-white p-5">
          <NavLink to="/gpt-search">
            <p className="text-xl font-medium text-green-500 transform transition duration-300 hover:scale-110 cursor-pointer">
              🚀Search with GPT
            </p>
          </NavLink>
          <p className="text-xl">👤 {userData?.displayName}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
