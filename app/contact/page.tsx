"use client";
import { ContactForm, ContactInfo, ImageSec, Intro } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main className="w-full">
      <Intro />
      <ContactInfo />
      <ImageSec />
      <ContactForm />
    </main>
  );
}

export default Contact;
