export const ContactUs = () => {
  return (
    <div className="bg-blue-50 py-6">
      <div className="flex">
        <form className="w-5/6 border-4 md:w-1/2 p-12 right-0 left-0  bg-white mx-auto my-10 rounded-lg">
          <p className="font-bold text-xl">GET IN TOUCH</p>
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2 border-black rounded-lg"
            placeholder="Your Name*"
            required
          />
          <input
            type="email"
            className="p-2 my-4 w-full  bg-slate-100 border-2 border-black rounded-lg"
            placeholder="Email*"
            required
          />
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Phone no.*"
            required
          />
          <textarea
            className="p-2 my-4 w-full bg-slate-100 border-2 border-black rounded-lg"
            rows="5"
            placeholder="Description*"
          ></textarea>
          <button className="ml-64 bg-blue-800 font-bold text-white w-2/12 h-8 rounded-3xl">Submit</button>
        </form>
      </div>

      <div className="popup">
        <button className="close-btn">&times;</button>
        <p>
          Thank you for reaching to us.
          <br />
          We would be contacting you soon.
        </p>
      </div>
    </div>
  );
};
