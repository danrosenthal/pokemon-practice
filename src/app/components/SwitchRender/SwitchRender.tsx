import React from "react";

import Clock from "../Clock/Clock";
import List from "../List/List";
import View from "../View/View";

interface Props {
  data: any;
}

export default function SwitchRender({ data }: Props) {
  if (Array.isArray(data)) {
    return <List list={data} />;
    // eslint-disable-next-line eqeqeq
  } else if (data == false) {
    return <Clock />;
  } else {
    return <View>{data}</View>;
  }
}
