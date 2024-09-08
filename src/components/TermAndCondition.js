import React from "react";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-700 py-10 px-4">
      <Helmet>
        <title>Terms and Conditions - SyncMovie</title>
        <meta
          name="description"
          content="Read the terms and conditions for using SyncMovie. Understand our policies on privacy, user conduct, and more."
        />
        <meta
          name="keywords"
          content="SyncMovie terms, conditions, user agreement, privacy policy, usage policy"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/term-and-conditions"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Terms and Conditions - SyncMovie" />
        <meta
          property="og:description"
          content="Review SyncMovie's terms and conditions for users, including privacy and usage policies."
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/term-and-conditions"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/terms-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions - SyncMovie" />
        <meta
          name="twitter:description"
          content="Read SyncMovie's terms and conditions, which outline user policies, privacy, and general guidelines."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/terms-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "TermsOfService",
          "name": "Terms and Conditions - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/term-and-conditions"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-6">Last updated: 26-8-2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-base leading-relaxed">
            These Terms and Conditions govern your use of [Your Application
            Name] operated by Software Solution Pvt Ltd. By accessing or using
            our website, you agree to comply with these terms, which include our
            Privacy Policy and any other rules or guidelines that we may
            introduce from time to time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Definitions
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Service:</strong> The website and all related services
              provided by Software Solution Pvt Ltd.
            </li>
            <li>
              <strong>User:</strong> Any individual who accesses or uses the
              Service.
            </li>
            <li>
              <strong>Content:</strong> Any information, text, graphics, videos,
              or other material uploaded, downloaded, or appearing on the
              Service.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Use of the Service
          </h2>
          <p className="text-base leading-relaxed">
            You agree to use the Service only for lawful purposes and in a way
            that does not infringe the rights of others or restrict or inhibit
            anyone else's use of the Service. You must not misuse our Service by
            knowingly introducing viruses, trojans, or other malicious or
            technologically harmful material.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Account Registration
          </h2>
          <p className="text-base leading-relaxed">
            To use certain features of the Service, you may need to create an
            account. You agree to provide accurate and complete information when
            creating an account and to update your information as necessary. You
            are responsible for maintaining the confidentiality of your account
            password and for all activities that occur under your account.
          </p>
        </section>

        {/* Add more sections as needed following the same structure */}

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg">
            <li>
              By email:
              <a
                href="mailto:shubham528prajapati@gmail.com"
                className="text-blue-600 hover:underline text-base"
              >
                {" "}
                shubham528prajapati@gmail.com
              </a>
            </li>
            <li>
              By visiting this page on our website:
              <a
                href="https://shubhamprajapati528.netlify.app"
                className="text-blue-600 hover:underline text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                shubhamprajapati528.netlify.app
              </a>
            </li>
            <li>
              By phone number:
              <a
                href="tel:+919027640571"
                className="text-blue-600 hover:underline text-base"
              >
                {" "}
                +91 90276 40571
              </a>
            </li>
            <li>By mail: Rudrapur, Udham Singh Nagar, Uttarakhand, IN</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
