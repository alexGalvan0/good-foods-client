import Link from 'next/link'
import Home from '../components/about/Home'
import useUser from '../hooks/useUser'
import Hero from '../components/about/Hero'

export default function Index() {
  const user = useUser()
  return (
    <div className='pt-5 mt-5'>
      <Hero />
    </div>
  )
}