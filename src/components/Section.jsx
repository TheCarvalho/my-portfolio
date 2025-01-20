export const Section = (props) => {
  return (
    <section className={`w-screen h-screen ${props.color? props.color : "bg-slate-600 "} ${props.className? props.className : ""}`}>
      {props.children}
    </section>
  );
};