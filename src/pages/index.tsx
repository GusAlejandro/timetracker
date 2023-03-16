import { Inter } from 'next/font/google'
import LoginForm from '../../components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LoginForm/>
    </>
  )
}
