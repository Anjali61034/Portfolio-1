import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import GithubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    // Check if EmailJS credentials are configured
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Anjali Sharma",
            from_email: form.email,
            to_email: "anjalisharmaaa656@gmail.com",
            message: form.message,
          },
          publicKey
        );
        setLoading(false);
        setSent(true);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    } else {
      // Fallback: mailto link when EmailJS is not configured
      const mailtoLink = `mailto:anjalisharmaaa656@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
      window.open(mailtoLink, "_blank");
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-accent/10"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/10 font-medium focus:border-accent transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/10 font-medium focus:border-accent transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/10 font-medium resize-none focus:border-accent transition-colors"
            />
          </label>

          <button
            type="submit"
            className="bg-accent py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md hover:bg-accent-light transition-all duration-300 hover:shadow-glow"
          >
            {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
          </button>
        </form>

        <div className="mt-8">
          <p className="text-secondary text-sm mb-4">Or connect with me on</p>
          <div className="flex flex-row gap-4">
            <a 
              href="https://github.com/Anjali61034/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-tertiary border border-accent/20 flex items-center justify-center hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <img src={GithubIcon} alt="Github" width={24} height={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anjali-sharma-253317312/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-tertiary border border-accent/20 flex items-center justify-center hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <img src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
            </a>
            <a 
              href="mailto:anjalisharmaaa656@gmail.com"
              className="w-12 h-12 rounded-full bg-tertiary border border-accent/20 flex items-center justify-center hover:border-accent hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
