import Link from 'next/link'
import Home from '../components/about/Home'
import useUser from '../hooks/useUser'
import Hero from '../components/about/Hero'
import BasicModal from '../components/modals/LoginModal'

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  )
}