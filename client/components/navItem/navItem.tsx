import * as React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props: { id: string, link: string, text: string, active?: boolean }) {
  return (
    <li className={`menu__item ${(props.active) ? 'menu__item_active' : ""}`}>
      <Link to={props.link} className="menu__link"> {props.text} </Link>
    </li>
  )
}
