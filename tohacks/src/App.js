
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sports' component={Sports}/>
        <Route exact path='/business' component={Business}/>
        <Route exact path='/finance' component={Finance}/>
      </Container>
    </Router>
  );
}

export default App;
