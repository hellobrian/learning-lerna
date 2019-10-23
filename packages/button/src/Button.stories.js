import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../build/index.esm";
import CloseIcon from "close-icon";

export default {
  title: "Button"
};

export const Default = () => <Button>wut up</Button>;
export const Close = () => (
  <Button type="button" onClick={action("onClick")}>
    <CloseIcon style={{ fill: "orange" }} />
    hello
  </Button>
);
