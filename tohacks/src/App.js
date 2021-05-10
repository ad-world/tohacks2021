import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import 'semantic-ui-css/semantic.min.css'


import Home from './pages/Home'
import Article from './pages/Article'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      {localStorage.getItem("config") ? <></> : <></>}
      <Router>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/articles/:articleId' component={Article} />
        </Switch>
      </Router>
    </Container>

  );
}

export default App;
