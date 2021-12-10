import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const navList = [
    { id: 0, title: "HOME", link: "/" },
    { id: 1, title: "COSTOM", link: "/custom" },
    { id: 2, title: "FREE", link: "/free" },
    { id: 3, title: "GALLERY", link: "/gallery" },
    { id: 4, title: "LOGIN", link: "/login" },
    { id: 4, title: "JOIN", link: "/join" },
  ];
  const viewList = navList.map((nav) => {
    return (
      <NavLink to={nav.link} key={nav.id}>
        {nav.title}
      </NavLink>
    );
  });

  return <ul>{viewList}</ul>;
}

export default MainNav;
