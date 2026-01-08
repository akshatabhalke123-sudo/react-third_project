import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl max-w-3xl w-full">
        
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Contact Me</h1>

        <p className="text-gray-300 mb-8 text-lg">
          Feel free to reach out using the form below. I will get back to you soon.
        </p>

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-lg mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg mb-2">Your Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg text-lg font-medium"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
