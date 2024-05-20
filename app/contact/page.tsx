import React from "react";
import { ContactForm, ContactInfo, ImageSec, Intro } from "./components";

function Contact() {
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
