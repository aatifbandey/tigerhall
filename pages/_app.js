import dynamic from "next/dynamic";
import { elementType, object } from "prop-types";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import ErrorBoundary from "@components/ErrorBoundary";
import ErrorView from "@components/ErrorView";
import { LoadingProvider } from "@modules/context/loading";
import client from "@utils/apollo-client";

import "../styles/globals.css";

const App = dynamic(
  () => import(/* webpackChunkname: "app" */ "@components/Layout/app"),
  {
    ssr: true,
  }
);

const renderError = (err) => {
  if (err instanceof RedirectError) {
    return null;
  }
  /* --- Create an error component **/
  return <div>{err.message}</div>;
};

function MyApp(props) {
  const { Component, pageProps, error } = props;

  const renderPublicComponents = () => {
    return (
      <LoadingProvider>
        <ErrorBoundary render={() => <ErrorView />} debug>
          <App>
            <Component {...pageProps} />
          </App>
        </ErrorBoundary>
      </LoadingProvider>
    );
  };

  return (
    <>
      <Head>
        <title>Tiger Hall FE Assignment</title>

        <meta
          name="viewport"
          content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0,
                      user-scalable=no"
        ></meta>
      </Head>
      <ApolloProvider client={client}>
        {error ? renderError(error) : renderPublicComponents()}
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {};
  let error = null;

  if (Component.getInitialProps) {
    try {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    } catch (err) {
      error = ResponseError.handle(err, ctx);
    }
  }

  return {
    pageProps,
    error,
  };
};

MyApp.propTypes = {
  Component: elementType.isRequired,

  error: object,
};

MyApp.defaultProps = {
  error: null,
};

export default MyApp;
