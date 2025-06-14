const getCurrentURL = window.location.href;

const isLocalEnvironment = () => getCurrentURL.includes('localhost');

export const getBaseURL = () => {
  if (isLocalEnvironment()) {
    return process.env.REACT_APP_API_LOCAL_URL;
  } else return process.env.REACT_APP_API_PROD_URL;
};
