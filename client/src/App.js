import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import Clock from './pages/Clock';
import ItemList from './pages/ItemList';

function App() {

  return (
    <>
    <NavBar />
    
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        <Route exact path='/clock' component={Clock}/>
        <Route exact path='/itemList' component={ItemList}/>
        
      </Switch>
      </Container>
   </>
  );
}

export default App;

