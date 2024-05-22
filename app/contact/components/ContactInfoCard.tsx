import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactInfoCardProps } from "@types";
import Link from "next/link";

function ContactInfoCard({
  heading,
  info,
  linkText,
  icon,
  widthStyles,
}: ContactInfoCardProps) {
  return (
    <article
      className={`overflow-hidden  border-r border-border-orange ${widthStyles} py-8 px-4 md:px-8 lg:py-20`}
    >
      <div
        className="flex gap-4 flex-col items-start md:items-center md:flex-row"
        data-aos="fade-left"
      >
        <div className="text-3xl text-text-green">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-yeseva text-orange">{heading}</h2>
          <span className="flex gap-4">
            <h3 className="font-yeseva text-orange text-xl md:text-2xl lg:shrink-0">
              {info}
            </h3>
          </span>
          <Link href="" className="underline text-semi-black">
            {linkText}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ContactInfoCard;
