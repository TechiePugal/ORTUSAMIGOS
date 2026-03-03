import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhdpcbp",     // Replace
        "template_ofqwk3l",    // Replace
        form.current,
        "jHgS3wrcFItJvAfvV"      // Replace
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          rows={4}
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;