import { createEffect, createSignal, Component } from "solid-js";

const Test: Component<{}> = (props) => {
  const [count, setCount] = createSignal(2);

  createEffect(() => {
    console.log(count());
  });

  return <div>Children are: {props.children}</div>;
};

export default Test;
