import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignin } from "../hooks/useLogin";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { NODE_API_ENDPOINT } from "../utils/utils";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoginForm = () => {
  const { signin, isLoadingL, errorL } = useSignin();

  const handleGoogleSignup = () => {
    window.open(`${NODE_API_ENDPOINT}/api/googleAuth/auth/google`, "_self"); // Redirect to your Google Auth route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Login - SyncMovie</title>
        <meta
          name="description"
          content="Login to SyncMovie and start watching movies with your friends online. Enjoy synchronized movie streaming and stay connected."
        />
        <meta
          name="keywords"
          content="SyncMovie login, online movie platform login, watch movies with friends, synchronized movie streaming login"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/login"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Login - SyncMovie" />
        <meta
          property="og:description"
          content="Login to SyncMovie and watch movies together with friends in sync. Get access to your personal movie theater."
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/login"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/login-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login - SyncMovie" />
        <meta
          name="twitter:description"
          content="Sign in to SyncMovie and start enjoying movies with synchronized playback online with friends."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/login-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "LoginPage",
          "name": "Login - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/login"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            signin(values.email.trim(), values.password.trim());
            if (errorL) {
              // toast.error(errorL);
              console.log(errorL);
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoadingL ? (
                    <BeatLoader
                      color="#ffffff"
                      loading={true}
                      css={override}
                      size={8}
                    />
                  ) : (
                    <>
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 9H3V7c0-2.206 1.794-4 4-4s4 1.794 4 4v2h-1a3 3 0 1 0 0 6h1v2H8v-2h1a3 3 0 1 0 0-6H7V7c0-1.103-.897-2-2-2S3 5.897 3 7v2zm3 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Sign in
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center space-x-4 ">
          {/* <button className="bg-blue-600 text-white p-2 rounded-full focus:outline-none">
              <FaFacebookF />
            </button>
            <button className="bg-blue-400 text-white p-2 rounded-full focus:outline-none">
              <FaTwitter />
            </button>
            <button className="bg-red-500 text-white p-2 rounded-full focus:outline-none">
              <FaGoogle onClick={handleGoogleSignup} />
            </button> */}
          <button
            class="w-full px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            onClick={handleGoogleSignup}
          >
            <img
              class="w- h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="text-center">Log in with Google</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
