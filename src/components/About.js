import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Helmet>
        <title>About Us - SyncMovie</title>
        <meta
          name="description"
          content="Learn more about SyncMovie, the platform designed to bring friends and family closer through synchronized movie watching online."
        />
        <meta
          name="keywords"
          content="about SyncMovie, watch movies online with friends, synchronized movie watching, group streaming"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/about"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - SyncMovie" />
        <meta
          property="og:description"
          content="SyncMovie is a platform for group movie watching with synchronized playback. Learn more about our mission to connect people!"
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/about"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/about-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - SyncMovie" />
        <meta
          name="twitter:description"
          content="SyncMovie helps people enjoy watching movies together from different locations. Learn about our journey and goals."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/about-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/about"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Story
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to Synchronous Video Watching, where every movie night
              becomes an unforgettable experience. Our platform is built on the
              belief that watching movies together should be easy, immersive,
              and most importantly, fun!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our journey began with a simple idea: to create a space where
              friends and families can connect over their favorite films,
              regardless of distance. Since then, we've grown into a vibrant
              community of movie lovers, united by our passion for cinema and
              our desire to share it with others.
            </p>
            <p className="text-lg text-gray-700">
              Join us on this adventure as we continue to innovate, inspire, and
              bring people together through the magic of storytelling. Let's
              make every movie night a celebration!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://res.cloudinary.com/dgsjppp4a/image/upload/v1711478265/shanvi_jdxpx8.jpg"
            alt="About"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
