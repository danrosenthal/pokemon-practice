import React from "react";

import { Link } from "react-router-dom";

export interface Props {
  items: {
    to: string;
    title: string;
  }[];
}

export default function Nav({ items }: Props) {
  const itemMarkup = items?.map((item) => {
    return (
      <li key={item.title}>
        <Link to={item.to}>{item.title}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul>{itemMarkup}</ul>
    </nav>
  );
}
