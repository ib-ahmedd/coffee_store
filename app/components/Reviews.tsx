import { reviewSectionArray } from "@constants";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="w-full bg-home-reviews-bg bg-cover bg-no-repeat">
      <div className="flex justify-end  bg-gradient-to-l from-orange via-orange to-transparent px-8 lg:px-20">
        <div className=" flex flex-col gap-8 text-white py-20 w-4/5 md:w-2/3 lg:w-1/2">
          <span>
            <h2 className="font-yeseva text-4xl md:text-7xl lg:text-8xl">
              Reviews
            </h2>
            <p className="font-yeseva text-lg md:text-xl">
              Our average customer rating is 4.8 / 5
            </p>
          </span>
          <div data-aos="fade-left">
            {reviewSectionArray.map((item) => (
              <ReviewCard key={item.user} {...item} />
            ))}
          </div>
          <a href="" className="underline lg:self-end">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
