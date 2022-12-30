import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieSongs from "./components/MovieSongs";
import Songs from "./components/Songs";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/songs/:movie" component={MovieSongs} />
      <Route exact path="/songs" component={Songs} />
    </Switch>
  );
};

export default App;
