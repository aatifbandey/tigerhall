import React from "react";
import { string } from "prop-types";

import { ErrorContainer, ErrorContainterChild } from "./styles";

const ErrorView = (props) => {
  const {
    description = "Something went wrong",
    title = "Error",
  } = props;

  return (
  
        <ErrorContainer>
          <ErrorContainterChild>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </ErrorContainterChild>
        </ErrorContainer>
  )
};

ErrorView.propTypes = {
  description: string.isRequired,
  title: string.isRequired,
};

export default ErrorView;
