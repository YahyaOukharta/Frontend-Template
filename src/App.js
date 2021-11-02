import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'


// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CustomHeader from "./components/CustomHeader"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <CustomHeader />
        <Home/>
      <Footer/>
    </div>
  )
}

export default App
