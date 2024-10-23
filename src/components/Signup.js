import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignup } from "../hooks/useSignup";
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

const Signup = () => {
  const { signup, isLoadingS, errorS } = useSignup();

  const handleGoogleSignup = () => {
    window.open(`${NODE_API_ENDPOINT}/api/googleAuth/auth/google`, "_self"); // Redirect to your Google Auth route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sign Up - SyncMovie</title>
        <meta
          name="description"
          content="Create a free account on SyncMovie to enjoy synchronized movie watching with friends online. Sign up today to start streaming!"
        />
        <meta
          name="keywords"
          content="SyncMovie signup, create account, watch movies with friends, online movie platform registration"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/signup"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Sign Up - SyncMovie" />
        <meta
          property="og:description"
          content="Join SyncMovie by signing up and start watching synchronized movies with friends from anywhere."
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/signup"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/signup-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up - SyncMovie" />
        <meta
          name="twitter:description"
          content="Sign up for SyncMovie and create your own movie nights with synchronized playback online."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/signup-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "RegisterAction",
          "name": "Sign Up - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/signup"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm password is required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            signup(
              values.name.trim(),
              values.email.trim(),
              values.password.trim()
            );
            if (errorS) {
              // toast.error(errorS);
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm sm:rounded-none"
                    placeholder="Email address"
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
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
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
                  {isLoadingS ? (
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
                      Sign up
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

export default Signup;
