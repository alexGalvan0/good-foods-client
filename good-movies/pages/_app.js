import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";
import Head from "next/head";
import AppBar from "../components/nav/MenuAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, red, grey } from "@mui/material/colors";
import SimpleBottomNavigation from "../components/nav/BottomNav";
import { useRouter } from "next/router";
import { Container } from "@mui/system";
// import { NextScript,Document } from "next/document";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[700],
        alert: red[500],
        black: "#000000",
      },
      secondary: {
        main: "#fff",
        dark: grey[900],
        grey: "#282c2c",
        nav: "#717e87",
      },
      alert: {
        main: red[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          className="base-page-size"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <div style={{ maxWidth: "100vw" }}>
            <Head>
              <title>Good Movies</title>
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
              />
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
              />

