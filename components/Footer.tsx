import { footerSlidesArray, navLinksArray } from "@constants";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <article className="relative flex justify-between w-full">
        {footerSlidesArray.map((item, i) => (
          <div key={i} className={`w-1/3 ${item.display} md:1/5 md:block`}>
            <img {...item} className="object-contain" />
          </div>
        ))}
      </article>
      <article className="flex flex-col items-center gap-8 w-full py-12 px-4 md:flex-row md:items-start md:py-32 xl:w-full">
        <div className="flex xl:justify-center items-center flex-1">
          <div className="relative w-40 h-40">
            <Image
              src="/images/logo/logo-black.png"
              alt="black logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-around flex-col items-center gap-8 text-center md:flex-row md:items-start">
          <div>
            <h3 className="text-lg md:text-2xl font-yeseva mb-4 text-semi-black">
              Follow Us
            </h3>
            <div className="text-xl text-text-green flex gap-4">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-yeseva mb-4 text-semi-black">
              Menu
            </h3>
            <ul>
              {navLinksArray.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="font-monteserat text-semi-black hover:text-orange"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl font-yeseva mb-4 text-semi-black">
              Contact
            </h3>
            <ul>
              <li className="font-monteserat text-semi-black">929-242-6868</li>
              <li className="font-monteserat text-semi-black">
                contact@info.com 123
              </li>
              <li className="font-monteserat text-semi-black">
                Fifth Avenue, New York,
              </li>
              <li className="font-monteserat text-semi-black">NY 10160</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="w-full py-14 border-t">
        <p className="w-full text-center px-4 xl:px-[10%] font-monteserat md:text-left">
          Copyright &copy; {new Date().getFullYear()} Coffee House | Powered by
          Coffee House
        </p>
      </article>
    </section>
  );
};

export default Footer;
