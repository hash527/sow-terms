import './App.css'
import Header from './components/Header'
import LandingPage from './components/landing-page'

function App() {

  return (
    <main className="wrapper">
      <div className="fixed-bg">
        <Header />
        <LandingPage />
      </div>
    </main>
  )
}

export default App

