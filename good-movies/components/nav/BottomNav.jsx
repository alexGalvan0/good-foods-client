import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import FloatingActionButtons from "./FloatingActionButton";
import { useEffect, useState } from "react";

export default function SimpleBottomNavigation() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("token"));
  });

  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const goToProfile = (e) => {
    e.preventDefault();
    router.push("/profile");
  };
  const goToSearchMovie = (e) => {
    e.preventDefault();
    router.push("/movie/search");
  };
  const goHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  let login = (e) => {
    router.push("/login");
  };

  let logout = (e) => {
    localStorage.clear("token");
    login();
  };

  return (
    <Box style={{ position: "fixed", bottom: "0", width: "100vw" }}>
      <div
        className=""
        style={{ position: "fixed", right: "0", bottom: "90px" }}
      >
        <FloatingActionButtons />
      </div>
      <BottomNavigation
        sx={{ bgcolor: "secondary.grey"}}
        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ bgcolor: "primary" }}
          onClick={goHome}
          icon={<HomeIcon color="secondary" />}
        />
        {user ? (
          <BottomNavigationAction
            onClick={goToProfile}
            label="PROFILE"
            icon={<AccountBoxIcon color="secondary" />}
          />
        ) : null}
        {user ? (
          <BottomNavigationAction
            onClick={logout}
            label="LOGOUT"
            icon={<LogoutIcon color="secondary" />}
          />
        ) : (
          <BottomNavigationAction
            onClick={login}
            label="LOGIN"
            icon={<LoginIcon color="secondary" />}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}
