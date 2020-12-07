import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom";
import AboutPage from './About'
import ContactPage from './Contact'
import HomePage from './Home'

function RouterComponent(){
      return(
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  
  function Home() {
    return <HomePage />
  }
  
  function About() {
    return <AboutPage name="Jakob" />
  }
  
  function Contact() {
    return <ContactPage />
  }
      
  export default RouterComponent