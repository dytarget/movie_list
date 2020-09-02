import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { MovielistPage } from "./modules/movielist";
import { MoviesPage } from "./modules/movie";
import { store } from "./store";
import { Container } from "./ui/atoms";

export default function App() {
  return (
    <Container height="100vh">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={MovielistPage} />
          <Route exact path="/movielist/:id" component={MoviesPage} />
        </Switch>
      </Provider>
    </Container>
  );
}
