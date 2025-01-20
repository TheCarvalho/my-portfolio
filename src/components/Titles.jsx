export const Titles = (props) => {
  return (
    <h2
      className={`
        font-extrabold ${props.color ? props.color : "text-slate-600"} 
        text-center text-3xl ${props.className ? props.className : ""} 
        mb-4 py-20`}
    >
      {props.children}
    </h2>
  );
};
