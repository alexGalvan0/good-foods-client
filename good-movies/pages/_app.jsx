import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import Head from 'next/head'
import AppBar from '../components/nav/MenuAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue,red,grey, black } from '@mui/material/colors';
import SimpleBottomNavigation from '../components/nav/BottomNav';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[700],
        alert: red[500],
        black:black
      },
      secondary: {
        main: '#fff',
        dark:grey[900],
        grey:'#282c2c',
        nav:'#717e87'
      },
      alert:{
        main:red[500],
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial='initialState'
          animate='animateState'
          exit="exitState"
          className='base-page-size'
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1
            },
            exitState: {

            }
          }}
        >
          <div style={{ maxWidth: '100vw' }}>
            <Head className="h-11 standalone:h-22">

              <link rel="manifest" href="/site.webmanifest" />
              <Script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js" defer></Script>

              <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" defer></Script>
              <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossOrigin="anonymous" defer></Script>
            </Head>
            <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div className='bg-dark'>
            </div>



            <AppBar />
            <Component {...pageProps} />
            {/* <Nav /> */}


            <SimpleBottomNavigation />


          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp

