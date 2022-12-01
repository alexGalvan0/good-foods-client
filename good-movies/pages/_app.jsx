import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import Script from 'next/script'
import Nav from '../components/nav/Nav';
import Head from 'next/head'
import useUser from '../hooks/useUser';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const user = useUser()
  
  return (
    <div style={{ maxWidth: '100vw' }}>
      <Head class="h-11 standalone:h-22">
        <link rel="manifest" href="/site.webmanifest" />
        {/* <Script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></Script> */}
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" defer></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossOrigin="anonymous" defer></Script>
      </Head>
      <div className='bg-dark'>
      </div>
      <Component {...pageProps} />
      <Nav />
    </div>
  )
}

export default MyApp
