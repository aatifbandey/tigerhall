import React from "react";
import { node } from "prop-types";
import { AppBar } from "./styles";

const AppLayout = (props) => {
  const { children } = props;

  return <AppBar>{children}</AppBar>;
};

AppLayout.propTypes = {
  children: node.isRequired,
};

export default AppLayout;
