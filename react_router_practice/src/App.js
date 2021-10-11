import React from "react";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";
const menus = [
  {
    name: "Trang Chu",
    to: "/",
    exact: true,
  },
  {
    name: "Gioi Thieu",
    to: "/about",
    exact: false,
  },
  {
    name: "Lien He",
    to: "/contact",
    exact: false,
  },
  {
    name: "San Pham",
    to: "/products",
    exact: false,
  },
  {
    name: "Dang Nhap",
    to: "/login",
    exact: false,
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu menus={menus} />
      </div>
    </BrowserRouter>
  );
}
