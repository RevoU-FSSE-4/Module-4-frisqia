// import { useState } from "react";

// export default function FormComponent() {
//   const [name, setName] = useState<string>("");
//   const [errorName, setErrorName] = useState<string>("");
//   const [errorEmail, setErrorEmail] = useState<string>("");

//   function handleClick(event: any) {
//     event.preventDefault(); //agar tidak ke reload
//     alert(name);
//   }
//   return (
//     <div>
//       <form onSubmit={handleClick}>
//         <input
//           type="text"
//           placeholder="Input Your name"
//           name="textExample"
//           onChange={(event) => {
//             const value = event.target.value;
//             if (value.length === 0) {
//               setErrorName("Nama harus lebih dari 3 huruf");
//             } else {
//               setErrorName("");
//               setName(event.target.value);
//             }
//           }}
//         />
//         <br />
//         <> {errorName}</>
//         <input
//           type="text"
//           placeholder="Input Your Email"
//           name="textExample"
//           onChange={(event) => {
//             const value = event.target.value;
//             if (value.length === 0) {
//               setErrorEmail("Email harus diisi");
//             } else {
//               setErrorEmail("");
//               setName(event.target.value);
//             }
//           }}
//         />
//         <br />
//         <> {errorEmail}</>
//         <br />
//         <button disabled={errorName !== "" || errorEmail !== ""}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
