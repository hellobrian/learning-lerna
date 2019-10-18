import React from "react";
import Button from "../build/index.esm";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const text = () => <Button onClick={action("click")}>wut up</Button>;
