import Photo from "/images/photo.png";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center">
      <img
        src={Photo}
        alt="Foto de Abdon Carvalho"
        className="h-96 rounded-full border-4 border-slate-500 shadow-md"
      />
      <h1 className="text-4xl font-extrabold mt-10 text-slate-300 drop-shadow-md">
        Abdon Carvalho
      </h1>
      <p className="font-bold text-slate-400 text-xl mt-2 drop-shadow-md">
        Front-end Developer
      </p>
    </div>
  );
};
