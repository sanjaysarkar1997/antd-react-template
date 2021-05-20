import { Input } from "antd";

import React, { useState } from "react";
import { connect } from "react-redux";
import { Counter } from "./Counter/Counter";

function Home(props) {
  const [text, setText] = useState("");

  const onOdd = React.useCallback(
    (e) => {
      setText("");
    },
    [setText]
  );

  return (
    <div className="container">
      <hr />
      <Input onChange={(e) => setText(e.target.value)} value={text} />
      <hr />
      <Counter onOdd={onOdd} />
      <hr />
    </div>
  );
}

const mapToStateProps = (state) => ({});

export default connect(mapToStateProps, {})(Home);
