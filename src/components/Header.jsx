import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between bg-gradient-to-b from-black w-screen">
      <h1 className="p-8 z-10 text-red-600 font-medium text-4xl ">
        NetflixGPT
      </h1>
      <div className="flex items-center gap-8 text-white cursor-pointer p-5">
        <p className="text-xl">👤 {userData?.displayName}</p>
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
