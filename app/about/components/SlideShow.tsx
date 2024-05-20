import Image from "next/image";

function SlideShow() {
  return (
    <section className="z-10 w-full flex flex-col md:flex-row">
      <div>
        <img
          src="/images/about/slideshow/left/slide-left-1.jpg"
          alt="slide image"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="/images/about/slideshow/right/slide-right-1.jpg"
          alt="slide image"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default SlideShow;
