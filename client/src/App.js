import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Landing, Detail, Form } from './views'

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Switch>
        <Route exact path ='/' component= {Landing} />
        <Route exact path = '/home' component= {Home} />
        <Route path = '/home/:id' component= {Detail} />
        <Route path = '/create' component= {Form} />
      </Switch>
    </div>
  );
}

export default App;
