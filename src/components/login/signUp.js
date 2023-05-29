import React, { useEffect, useState } from "react";
import img from './assets/blogimage.png'
import axios from "axios";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// const UsersignUp = () => {
//   const [fulname, setFulname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");

//     const SignUpDetail = async() => {
//        await axios.post("http://127.0.0.1:4001/users", {
//            name: fulname,
//            email: email,
//            password: password,
//            phone: phone,
//          })
//          .catch((error) => console.log("error occurring",error));
//      };
//   const submitHandler = (e) => {
//     e.preventDefault();

//     const signupdata = {
//       userfulname: fulname,
//       useremail: email,
//       userpaswword: password,
//       userphone: phone,
//     };
//     console.log(signupdata);
//     SignUpDetail()
//     setFulname("");
//     setEmail("");
//     setPassword("");
//     setPhone("");
//   };

//   return (
       
//     <div className="login__container">
//       <h2>SignUp</h2>
//       <form onSubmit={submitHandler} className="login__form">
//         <label>FulName</label>
//         <input
//           type="text"
//           placeholder="Fulname"
//           value={fulname}
//           onChange={(e) => setFulname(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label>Phone</label>
//         <input
//           type="text"
//           placeholder="Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <button type="submit" className="loginBtn">
//           SIGN UP
//         </button>
//         <p>
//           Don't have an account?{" "}
//           <span className="link">
//             Sign up
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };
// export default UsersignUp;


import { Formik, Field, Form } from "formik";
const UsersignUp = () => {
        const handleSubmit = (values) => {
            axios
              .post("http://127.0.0.1:8000/users", values)
              .catch((error) => console.log("error occurring", error));
          };
  return (
   <div className="container">
   <div className="row">
    <div className="col-md-8 col-sm-12"><img src={img} /></div>
    <div className="col-md-4 col-sm-12">
    <h2>SignUp</h2>
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" className="form-control" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" className="form-control" type="email" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">password</label>
            <Field name="password" className="form-control" type="password" />
          </div>

          <div className="form-group">
            <label htmlFor="content">phone</label>
            <Field name="phone" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {isSubmitting ? "Please wait..." : "SignUp"}
            </button>
          </div>
        </Form>
      )}
    </Formik>


    </div>
</div>
</div>
   
  );
};

export default UsersignUp;
