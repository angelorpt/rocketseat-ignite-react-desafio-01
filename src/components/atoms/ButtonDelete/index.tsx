import React from "react";
import TrashIcon from "../TrashIcon";
import { Button } from "./styles";

function ButtonDelete() {
  const [hover, setHover] = React.useState(false);

  return (
    <Button
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TrashIcon hover={hover} />
    </Button>
  );
}

export default ButtonDelete;
