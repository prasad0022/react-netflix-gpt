import { useState, useRef } from "react";
import { validateForm } from "../utils/validateForm";

const Login = () => {
  const [isNew, setNew] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const msg = validateForm(email.current.value, password.current.value);
    setInvalidMsg(msg);
  };

  return (
    <div>
      <img
        className="absolute brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
        alt="bg-img"
      ></img>
      <h1 className="absolute top-5 left-40 z-10 text-red-600 font-medium text-5xl">
        NetflixGPT
      </h1>
      <div className="absolute top-30 left-120 z-10 w-120 bg-[rgba(6,2,2,0.7)] p-12 rounded-[10px]">
        <h1 className="text-white text-3xl font-bold">
          {isNew ? "Sign Up" : "Sign In"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="justify-center mt-6 p-5 flex flex-col gap-4"
        >
          {isNew && (
            <input
              className="w-full bg-[rgba(123,123,177,0.4)] p-3 rounded-[5px] text-white"
              type="text"
              placeholder="Name"
              required={true}
            />
          )}
          <input
            ref={email}
            className="w-full bg-[rgba(123,123,177,0.4)] p-3 rounded-[5px] text-white"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="w-full bg-[rgba(123,123,177,0.4)]  p-3 rounded-[5px] text-white"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600 text-[13px]">{invalidMsg}</p>
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white font-medium w-full text-center mt-6 py-3 rounded-[5px] hover:bg-red-700 cursor-pointer"
          >
            {isNew ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-gray-400 mt-4">
            {isNew ? "Already have an account ?" : "New to NetflixGPT ?"}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={() => setNew(!isNew)}
            >
              {isNew ? " Login." : " Sign Up now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
