import React from "react";
import { node, string } from "prop-types";
import { AppBar } from "./styles";

const AppLayout = (props) => {
  const { children } = props;

  return <AppBar>{children}</AppBar>;
};

AppLayout.propTypes = {
  children: node.isRequired,
  pathname: string.isRequired,
};

export default AppLayout;
