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
    <div className="bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between items-center p-4">
      {/* Logo */}
      <h1 className="text-red-600 z-10 font-medium text-2xl md:text-4xl p-2 md:p-8">
        NetflixGPT
      </h1>

      {/* User Section */}
      {userData && (
        <div className="flex flex-row md:flex-row items-center gap-4 md:gap-8 text-white">
          {/* Search */}
          <NavLink to="/gpt-search">
            <p className="text-lg md:text-xl font-medium text-green-500 transform transition duration-300 hover:scale-110 cursor-pointer">
              🚀Search with GPT
            </p>
          </NavLink>

          {/* User Info */}
          <p className="text-lg md:text-xl">👤 {userData?.displayName}</p>

          {/* Sign Out Button */}
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
