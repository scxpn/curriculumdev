import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ModalUsers from "../utils/components/ModalUsers";

export default () => {
  return (
    <Switch>
      <Route path={"/following"} component={ModalUsers} />
      <Route path={"/followers"} component={ModalUsers} />
    </Switch>
  );
};
