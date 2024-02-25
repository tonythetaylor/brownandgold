import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="dark:bg-[#403122] dark:text-[#fffff4]  text-[#403122]">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#403122] dark:text-[#fffff4]">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-[#403122] dark:text-[#fffff4] sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#403122] dark:text-[#fffff4]"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-[#403122]/10 border border-[#403122]/35 text-[#403122] text-sm rounded-lg focus:ring-[#b58037] focus:border-[#b58037] block w-full p-2.5 dark:bg-[#fffff4] dark:border-[#403122]/25 dark:placeholder-[#403122] dark:text-[#403122] dark:focus:ring-[#b58037] dark:focus:border-[#b58037] dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-[#403122] dark:text-[#fffff4]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-[#403122]/10 border border-[#403122]/35 text-[#403122] text-sm rounded-lg focus:ring-[#b58037] focus:border-[#b58037] block w-full p-2.5 dark:bg-[#fffff4] dark:border-[#403122]/25 dark:placeholder-[#403122] dark:text-[#403122] dark:focus:ring-[#b58037] dark:focus:border-[#b58037] dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-[#403122] dark:text-[#fffff4]"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-[#403122]/10 border border-[#403122]/35 text-[#403122] text-sm rounded-lg focus:ring-[#b58037] focus:border-[#b58037] block w-full p-2.5 dark:bg-[#fffff4] dark:border-[#403122]/25 dark:placeholder-[#403122] dark:text-[#403122] dark:focus:ring-[#b58037] dark:focus:border-[#b58037] dark:shadow-sm-light"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary "
            //   className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
