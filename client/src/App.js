import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./components/layout/Header"
import Landing from "./components/layout/Landing"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  )
}

export default App
