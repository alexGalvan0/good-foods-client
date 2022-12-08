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
        black: '#000000',
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
                content="initial-scale=1, viewport-fit=cover"
              />
              <link rel="manifest" href="/manifest.json"/>
              <link rel="apple-touch-icon" href="/icon.png" />
              <meta name="theme-color" content="#191b1d" />
            
            </Head>
            <Script
                src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"
                defer
              ></Script>

              <Script
                src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"
                defer
              ></Script>
              <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                crossOrigin="anonymous"
                defer
              ></Script>
            <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js" async defer></script>
            <script
              src="https://accounts.google.com/gsi/client"
              async
              defer
            ></script>
            <div className="bg-dark"></div>

            <AppBar />
            <Component {...pageProps} />
            <Container sx={{ height: "50px" }}></Container>
            {/* <Nav /> */}
            <SimpleBottomNavigation />
          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
