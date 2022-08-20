import React from "react";

import style from "./List.module.css";

export interface Props {
  list: any[];
}

export default function List({ list }: Props) {
  const listMarkup = list.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return <ul className={style.List}>{listMarkup}</ul>;
}
