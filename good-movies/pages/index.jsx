import Link from 'next/link'
import Home from '../components/about/Home'
import About from './about'

export default function Index() {
  return (
    <div>
      <Home />
      <About />
    </div>
  )
}