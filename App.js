import NavigationBar from './myComponents/NavigationBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MyProfile from './myComponents/MyProfile';

function App() {
  return (
    <Router>
      <NavigationBar />
      <MyProfile />
      <Switch>
        <Route path="/profile">
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
