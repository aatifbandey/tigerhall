import React, { PureComponent } from 'react';
import { string, bool, node, func } from 'prop-types';

class ErrorBoundary extends PureComponent {
  static defaultProps = {
    children: null,
    debug: true,
    errorMessage: '',
    render: null,
    source: '',
  };

  state = {
    error: null,
  };

  defaultRender = () => {
    const { errorMessage } = this.props;

    const message = errorMessage || 'Sorry, something went wrong.';

    return <div>{message}</div>;
  };

  componentDidCatch(error, info) {
    const { debug, source } = this.props;

    if (debug) {
      console.groupCollapsed(`Error occured!`);
      console.error(`
        [ErrorBoundary] Source of Error: ${source}
        [ErrorBoundary] Error message: ${error.message}
        [ErrorBoundary] Error stack: ${error.stack}
        [ErrorBoundary] Component stack: ${info.componentStack}
      `);
      console.groupEnd();
    }

    // if (window.Raven) {
    //   window.Raven.captureException(error, { extra: info });
    // }

    // if (__TEST__) {
    //   throwGlobalError(error);
    // }

    this.setState({ error });
  }

  render() {
    const { children, render } = this.props;
    const { error } = this.state;
    const renderError = render || this.defaultRender;

    return error ? renderError(error) : children;
  }
}

ErrorBoundary.propTypes = {
  children: node,
  debug: bool,
  errorMessage: string,
  render: func,
  source: string,
};

export default ErrorBoundary;
