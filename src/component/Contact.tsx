const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <form className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          rows={4}
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
