import { Route, Switch } from 'react-router-dom';
import HomePage from './src/HomePage'; // Replace with your actual component names

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/ " component={HomePage} />
      {/* Add other routes here */}
    </Switch>
  );
};

export default Routes;
