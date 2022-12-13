import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import SnackbarAlert from "../nav/SnackBar";

function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const userNameInput = (e) => {
    setUsername(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = axios.post(
        "https://good-movies-371412.ue.r.appspot.com/api/token",
        {
          username: username.toLowerCase().trim(),
          password: password,
        }
      );
      const res = await user;
      localStorage.setItem("token", res.data.access);
      router.push("/profile");
    } catch {
      alert("Wrong username or password");
    }
  };
  return (
    <form>
      <div className=" container d-flex flex-column justify-content-center gap-3  p-3 rounded bg-primary">
        <input
          onChange={userNameInput}
          type="text"
          className="form-control bg-light"
          placeholder="USER NAME"
          value={username}
        />
        <input
          autocomplete="on"
          onChange={passwordInput}
          type="password"
          className="form-control bg-light"
          id="exampleInputPassword1"
          placeholder="PASSWORD"
          value={password}
        />
        <Button type="submit" onClick={submit}>
          <SnackbarAlert
            inputText2={username}
            inputText={password}
            message="Wrong input values"
            buttonText="LOGIN"
          />
        </Button>
        <Typography color="secondary">NO ACCOUNT?</Typography>
        <Button type="submit" color="success" variant="contained">
          <Link style={{ textDecoration: "none" }} href="/register">
            <Typography color="secondary">GET STARTED — ITS FREE!</Typography>
          </Link>
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
