import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mjkyljwy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Message sent! I’ll get back to you soon.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("⚠️ Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("🌐 Network error. Please check your connection.");
    }

    // Reset after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-400">
            Have a question or want to work together? Fill the form below!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700/50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div className="text-center">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {status !== "idle" && (
            <p
              className={`text-center text-sm mt-4 ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
