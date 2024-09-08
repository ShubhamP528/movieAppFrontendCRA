import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-12 ">
      <Helmet>
        <title>Privacy Policy - SyncMovie</title>
        <meta
          name="description"
          content="Read SyncMovie's privacy policy to understand how we protect your data and use information on our platform."
        />
        <meta
          name="keywords"
          content="SyncMovie privacy policy, data protection, user privacy, information usage, GDPR compliance"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/privacy-policy"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy - SyncMovie" />
        <meta
          property="og:description"
          content="SyncMovie takes your privacy seriously. Read our privacy policy to learn more about how we protect your data."
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/privacy-policy-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - SyncMovie" />
        <meta
          name="twitter:description"
          content="Understand SyncMovie's privacy practices, including how your personal information is collected, used, and protected."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/privacy-policy-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          "name": "Privacy Policy - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/privacy-policy"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">Last updated: August 26, 2024</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Introduction
          </h2>
          <p className="text-gray-700 mb-4">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You. We use Your Personal data to provide and improve the
            Service. By using the Service, You agree to the collection and use
            of information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Interpretation and Definitions
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Interpretation
          </h3>
          <p className="text-gray-700 mb-4">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Definitions
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>
              <strong>Account:</strong> A unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate:</strong> An entity that controls, is controlled
              by or is under common control with a party...
            </li>
            <li>
              <strong>Company:</strong> Refers to Sync Movie Watching.
            </li>
            <li>
              <strong>Cookies:</strong> Small files that are placed on Your
              computer...
            </li>
            <li>
              <strong>Country:</strong> Refers to Uttarakhand, India.
            </li>
            <li>
              <strong>Device:</strong> Any device that can access the Service...
            </li>
            <li>
              <strong>Personal Data:</strong> Any information that relates to an
              identified or identifiable individual.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Website.
            </li>
            <li>
              <strong>Service Provider:</strong> Any natural or legal person who
              processes the data on behalf of the Company.
            </li>
            <li>
              <strong>Third-party Social Media Service:</strong> Any website or
              social network website through which a User can log in...
            </li>
            <li>
              <strong>Usage Data:</strong> Data collected automatically, either
              generated by the use of the Service...
            </li>
            <li>
              <strong>Website:</strong> Refers to Sync Movie Watching,
              accessible from{" "}
              <a
                href="https://syncmovieapp.vercel.app/"
                className="text-blue-500"
              >
                https://syncmovieapp.vercel.app/
              </a>
            </li>
            <li>
              <strong>You:</strong> The individual accessing or using the
              Service...
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Types of Data Collected
          </h3>
          <h4 className="text-md font-semibold text-gray-800 mb-1">
            Personal Data
          </h4>
          <p className="text-gray-700 mb-4">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mb-1">
            Usage Data
          </h4>
          <p className="text-gray-700 mb-4">
            Usage Data is collected automatically when using the Service. Usage
            Data may include information such as Your Device's Internet Protocol
            address (e.g. IP address), browser type, browser version, the pages
            of our Service that You visit, the time and date of Your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data.
          </p>

          <h4 className="text-md font-semibold text-gray-800 mb-1">
            Information from Third-Party Social Media Services
          </h4>
          <p className="text-gray-700 mb-4">
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
            Google, Facebook, Instagram, Twitter, LinkedIn...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Tracking Technologies and Cookies
          </h2>
          <p className="text-gray-700 mb-4">
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Use of Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            The Company may use Personal Data for the following purposes: to
            provide and maintain our Service, to manage Your Account, for the
            performance of a contract, to contact You, to provide You with news,
            special offers, and general information...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Retention of Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Transfer of Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Delete Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Disclosure of Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to comply with a legal obligation,
            protect and defend the rights or property of the Company, prevent or
            investigate possible wrongdoing in connection with the Service...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Security of Your Personal Data
          </h2>
          <p className="text-gray-700 mb-4">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Children's Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13...
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Links to Other Websites
          </h2>
          <p className="text-gray-700 mb-4">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third-party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to this Privacy Policy
          </h2>
          <p className="text-lg">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-lg mt-2">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p className="text-lg mt-2">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>
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

export default PrivacyPolicy;
