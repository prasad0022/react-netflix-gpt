const Login = () => {
  return (
    <div>
      <img
        className="brightness-35"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
        alt="bg-img"
      ></img>
      <h1 className="absolute top-5 left-40 z-10 text-red-600 font-medium text-5xl">
        NetflixGPT
      </h1>
      <div className="absolute top-30 left-120 z-10 w-120 bg-[rgba(6,2,2,0.65)] p-12 rounded-[10px]">
        <h1 className="text-white text-3xl font-bold">Sign In</h1>
        <form className="justify-center mt-6 p-5 flex flex-col gap-4">
          <input
            className="w-full bg-gray-200 p-3 rounded-[5px] opacity-70"
            type="email"
            placeholder="Email or Mobile Number"
            required={true}
          />
          <input
            className="w-full bg-gray-200 p-3 rounded-[5px] opacity-70"
            type="password"
            placeholder="Password"
            required={true}
          />
          <button className="bg-red-600 text-white font-medium w-full text-center mt-6 py-3 rounded-[5px] hover:bg-red-700 cursor-pointer">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
