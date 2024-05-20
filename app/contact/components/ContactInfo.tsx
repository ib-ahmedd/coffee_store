import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactInfoCard from "./ContactInfoCard";

function ContactInfo() {
  return (
    <section className="bg-peach flex justify-center">
      <div className="flex flex-col w-full lg:flex-row xl:w-4/5">
        <div className="w-full lg:w-1/2">
          <ContactInfoCard
            heading="Location"
            info="123 Fifth Avenue, New York, NY 10160"
            linkText="View On Google Maps"
            icon={faLocationDot}
            widthStyles="w-full"
          />
        </div>
        <div className="flex w-full flex-col md:flex-row lg:w-1/2">
          <ContactInfoCard
            heading="Reservations"
            info="929-242-6868"
            linkText="contact@info.com"
            icon={faPhone}
            widthStyles="w-full md:w-1/2"
          />
          <div className="flex flex-col gap-8 border-r border-border-orange py-8 px-4 w-full md:px-8 md:w-1/2 lg:py-20">
            <h2 className="font-yeseva text-orange">Opening Hours</h2>
            <ul className="flex flex-col gap-4 text-semi-black">
              <li>Weekdays: 09:00 - 22:00</li>
              <li>Saturday: 09:30 - 23:30</li>
              <li>Sunday: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
