type SampleComponentProps = {
  judul: string;
  deskripsi: string;
};
function PropsOneComp(props: SampleComponentProps) {
  return (
    <div>
      <h1>{props.judul}</h1>
      <h1>{props.deskripsi}</h1>
    </div>
  );
}
export default PropsOneComp;

// function ComponentA() {
//     return <ComponentB name="pass me all the way down" />;
//   }
//   function ComponentB(props: { name: string }) {
//     return <ComponentC name={props.name} />;
//   }
//   function ComponentC(props: { name: string }) {
//     return <ComponentD somethingElse={props.name} />;
//   }
//   function ComponentD(props: { somethingElse: string }) {
//     return <div>{prop.somethingElse}</div>;
//   }
