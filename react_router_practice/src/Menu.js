import React from "react";
import MenuLink from "./MenuLink";

const showMenuLink = (menus) => {
    let temp
  if (Array.isArray(menus) && menus.length > 0) {
    temp = menus.map((item, index) => {
      return <MenuLink key={index} name={item.name} to={item.to} exact={item.exact} />;
    });
  }
  return temp
};

export default function Menu(props) {
  const { menus } = props;
  return (
    <div className="navbar navbar-default">
      <ul className="nav navbar-nav">{showMenuLink(menus)}</ul>
    </div>
  );
}
