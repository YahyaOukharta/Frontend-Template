import { Route, Switch, BrowserRouter } from 'react-router-dom'


// pages
import Home from './pages/Home'
import Crud from './pages/Crud'
import Dashboard from './pages/Dashboard'

import CustomHeader from "./components/CustomHeader"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomHeader />
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/crud1">
            <Crud />
          </Route>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
