import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import UserDetail from './UserDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/:id"
          component={UserDetail}
          render={(routerProps) => <UserDetail {...routerProps} />}
        />
        <Route path="/default" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
