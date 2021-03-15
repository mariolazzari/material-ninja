import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fontsource/roboto";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
