import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Link from "next/link";
import SnackBarRegister from "../nav/SnackBarRegister";
import { useRouter } from "next/router";
import emailjs from 'emailjs-com';
function RegisterForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userNameInput = (e) => {
    setUsername(e.target.value);
  };
  const FNameInput = (e) => {
    setFname(e.target.value);
  };
  const LameInput = (e) => {
    setLname(e.target.value);
  };
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j56upqs', 'template_v2pifa5', {email}, 'L6lSsRc-f4EInS-N4')

     e.target.reset()
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      username != "" &&
      fname != "" &&
      lname != "" &&
      email.includes('.com','@') &&
      password != ""
    ) {
      try {
        axios.post(
          "https://good-movies-371412.ue.r.appspot.com/api/register",
          {
            username: username.toLowerCase(),
            first_name: fname,
            last_name: lname,
            email: email,
            password: password,
          }
        );
        router.push("/login");
        console.log("yaya");
      } catch {
        console.log("err");
      }
    }
  };
  // const login = () =>{} Login after registering

  return (
    <form className="d-flex flex-column justify-content-center gap-1  p-3 bg-dark rounded">
      <div className="col">
        <input
          onChange={userNameInput}
          type="text"
          className="form-control bg-light"
          placeholder="USER NAME"
          value={username}
        />
      </div>
      <div className="col">
        <input
          onChange={FNameInput}
          type="text"
          className="form-control bg-light"
          placeholder="FIRST NAME"
          value={fname}
        />
      </div>
      <div className="col">
        <input
          onChange={LameInput}
          type="text"
          className="form-control bg-light"
          placeholder="LAST NAME"
          value={lname}
        />
      </div>
      <div className="form-group">
        <input
          onChange={emailInput}
          type="email"
          className="form-control bg-light"
          id="exampleInputEmail1"
          placeholder="EMAIL"
          aria-describedby="emailHelp"
          value={email}
        />
      </div>
      <div className="form-group">
        <input
          onChange={passwordInput}
          type="password"
          className="form-control bg-light"
          id="exampleInputPassword1"
          placeholder="PASSWORD"
          value={password}
        />
      </div>
      <Button type="submit" onClick={submit}>
        <SnackBarRegister
          message="Wrong Inputs"
          uName={username}
          fname={fname}
          lName={lname}
          eMail={email}
          passWord={password}
          buttonText="Register"
        ></SnackBarRegister>
      </Button>
      <p style={{ color: "white" }}>Already have an account?</p>
      <Link style={{ textDecoration: "none" }} href="/login">
        <Button variant="contained">Login</Button>
      </Link>
    </form>
  );
}
export default RegisterForm;
