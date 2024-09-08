import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps!! Error</h1>
      <br />
      <h2>Status Code = {err.status}</h2>
      <h2>Status text = {err.statusText}</h2>
    </>
  );
};

export default Error;
