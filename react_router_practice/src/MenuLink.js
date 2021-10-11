import React from "react";
import { Route, Link } from "react-router-dom";
export default function MenuLink(props) {
  const { name, to, exact } = props;
  return (
    <div>
      <Route
        path={to}
        exact={exact}
        children={({ match }) => {
          return <Link to={to}>{name}</Link>;
        }}
      />
    </div>
  );
}
