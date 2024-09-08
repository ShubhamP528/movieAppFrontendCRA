import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Helmet>
        <title>Contact Us - SyncMovie</title>
        <meta
          name="description"
          content="Have questions? Contact SyncMovie to learn more about how we can help you watch movies online with friends."
        />
        <meta
          name="keywords"
          content="contact SyncMovie, support for online movie watching, synchronized playback support, contact movie platform"
        />
        <link
          rel="canonical"
          href="https://syncmovie-watch.netlify.app/contact"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - SyncMovie" />
        <meta
          property="og:description"
          content="Get in touch with SyncMovie for support or inquiries. We're here to help!"
        />
        <meta
          property="og:url"
          content="https://syncmovie-watch.netlify.app/contact"
        />
        <meta
          property="og:image"
          content="https://syncmovie-watch.netlify.app/static/contact-social-banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - SyncMovie" />
        <meta
          name="twitter:description"
          content="Reach out to the SyncMovie team for any support or help related to watching movies with friends."
        />
        <meta
          name="twitter:image"
          content="https://syncmovie-watch.netlify.app/static/contact-social-banner.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us - SyncMovie",
          "url": "https://syncmovie-watch.netlify.app/contact"
        }
      `}
        </script>

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Have a question or feedback for us? We'd love to hear from you!
              Please feel free to reach out using the form below, and we'll get
              back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
