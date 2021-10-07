import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "../pages/Landing";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};
