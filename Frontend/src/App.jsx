import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroContent from './components/HeroContent'
import FeatureComponent from './components/FeatureComponent'
import FooterComponent from './components/FooterComponent'
import AuthComponent from './components/AuthComponent'

function App() {
  const pathname = window.location.pathname

  if (pathname === '/login' || pathname === '/signup') {
    return (
      <>
        <NavbarComponent minimal />
        <AuthComponent mode={pathname.slice(1)} />
      </>
    )
  }

  return (
    <>
      <NavbarComponent/>
      <HeroContent/>
      <FeatureComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
