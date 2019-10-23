import React from "react";
import Button from "../build/index.esm";
import CloseIcon from "close-icon";

export default {
  title: "Button"
};

export const Default = () => <Button>wut up</Button>;
export const Close = () => (
  <Button>
    <CloseIcon style={{ fill: "orange" }} />
  </Button>
);
