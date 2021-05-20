import { Button, Typography } from "antd";
import React, { useRef } from "react";

export const Counter = React.memo(({ onOdd }) => {
  const render = useRef(0);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Typography.Paragraph>Render : {render.current++}</Typography.Paragraph>
      <Typography.Paragraph>Count : {count}</Typography.Paragraph>
      <hr />
      <Button
        onClick={() => {
          setCount(count + 1);
          if (count % 2 === 0) {
            onOdd();
          }
        }}
      >
        Increment
      </Button>
    </>
  );
});
