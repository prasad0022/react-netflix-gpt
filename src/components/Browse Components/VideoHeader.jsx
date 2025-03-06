// eslint-disable-next-line react/prop-types
const VideoHeader = ({ original_title, overview }) => {
  return (
    <div className="w-180 p-20 mt-40 text-white">
      <h1 className="text-5xl font-bold">{original_title}</h1>
      <p className="mt-6 text-lg">{overview}</p>
      <div className="mt-6 text-xl inline-block">
        <button className="bg-[rgb(255,255,255)] hover:bg-gray-400 text-black font-medium w-35 px-4 py-2 rounded-lg transition duration-300 cursor-pointer">
          Play
        </button>
        <button className="bg-[rgba(6,2,2,0.65)] hover:bg-white text-white hover:text-black font-medium w-40 ml-5 px-4 py-2 rounded-lg transition duration-300 cursor-pointer">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoHeader;
