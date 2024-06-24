import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import ListUsers from "./components/ListUsers";
import UserProfile from "./components/UserProfile";
import Singin from "./components/SingIn";
import EditPicture from "./components/EditPicture";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Singin} />
        <PrivateRoute exact path="/home" component={ListUsers} />
        <PrivateRoute exact path="/profile" component={UserProfile} />
        <PrivateRoute path="/editpic" component={EditPicture} />
      </Switch>
    </div>
  );
}

export default App;
