export const Tile = (props) => {
  return (
    <div className="border bg-slate-300 rounded-lg p-2 flex justify-center items-center">
      {props.children}
    </div>
  );
};
