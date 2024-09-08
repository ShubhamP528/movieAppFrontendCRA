import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const images = [
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663076010545-c01827be01dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white py-16">
      <Helmet>
        <title>SyncMovie - Watch Movies Together Online</title>
        <meta
          name="description"
          content="SyncMovie is a platform where you can watch movies together with friends online. Synchronize playback in real-time and enjoy a movie night anytime, anywhere!"
        />
        <meta
          name="keywords"
          content="watch movies together, synchronized playback, online movie night, movie streaming with friends, watch party platform"
        />
        <link rel="canonical" href="https://syncmovie-watch.netlify.app/" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="SyncMovie - Watch Movies Together Online"
        />
        <meta
          property="og:description"
          content="SyncMovie lets you watch movies with friends online. Enjoy synchronized playback for a seamless group viewing experience!"
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/home-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SyncMovie - Watch Movies Together Online"
        />
        <meta
          name="twitter:description"
          content="Join SyncMovie and have fun watching movies with friends, no matter where they are!"
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/home-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SyncMovie - Watch Movies Together Online",
          "url": "https://syncmovie-watch.netlify.app/"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Synchronous Video Watching
        </motion.div>
        <motion.div
          className="text-lg mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Watch movies and TV shows together with friends, synchronized in
          real-time
        </motion.div>
        <Link to={"/theator"}>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 mb-8 block mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Get Started
          </motion.button>
        </Link>
        <motion.div
          className="text-xl mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Featured Movies
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[...images].map((im, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              style={{
                paddingBottom: "56.25%", // Aspect ratio 16:9
                backgroundImage: `url(${im})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1.2, duration: 0.8 }}
            ></motion.div>
          ))}
        </motion.div>
        {/* <motion.div
          className="mt-16 text-sm opacity-50 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Scroll down to discover more
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
