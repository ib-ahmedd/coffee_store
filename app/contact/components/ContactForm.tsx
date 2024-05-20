function ContactForm() {
  return (
    <section className="flex justify-center py-8 md:py-28">
      <div className="flex flex-col w-full px-4 md:px-8 md:flex-row xl:w-4/5 xl:px-0">
        <div className="flex flex-col gap-4 pr-20 py-16 w-full md:w-1/2">
          <h1 className="font-yeseva font-bold text-orange text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Contact
          </h1>
          <p className="text-semi-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <form className="flex flex-col gap-8 w-full md:w-1/2">
          <div className="flex flex-col w-full">
            <label htmlFor="fname">
              Name<span className="text-red-600">*</span>
            </label>
            <div className="flex w-full gap-4">
              <span className="flex flex-col flex-1">
                <input type="text" name="fname" id="fname" />
                <p className="text-sm">First</p>
              </span>
              <span className="flex flex-col flex-1">
                <input type="text" name="lname" id="lname" />
                <p className="text-sm">Last</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <input type="email" id="email" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea id="message" className="h-32" />
          </div>
          <button className="text-white bg-orange w-28 h-14 hover:bg-text-green">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
