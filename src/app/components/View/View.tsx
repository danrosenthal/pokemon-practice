import React from "react";

export interface Props {
  children: React.ReactChildren;
}

export default function View({ children }: Props) {
  return <div>{children}</div>;
}
