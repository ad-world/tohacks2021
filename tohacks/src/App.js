import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import './App.css';

import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Container>
        <Route exact path='/' component={Home}/>
        {/* <Route exact path='/sports' component={Sports}/>
        <Route exact path='/business' component={Business}/>
        <Route exact path='/finance' component={Finance}/>
        <Route exact path='/politics' component={Politics}/> */}
      </Container>
    </Router>
  );
}

export default App;
