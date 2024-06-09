import AEROPLANE_IMG from "../utilis/paper aeroplane.png";
import TWITTER_IMG from "../utilis/twitter.png";
import FB_IMG from "../utilis/facebook.png";
import INSTA_IMG from "../utilis/instagram.png";

export const Footer = () => {
  return (
    <div className="bg-black text-white mb-0 -mt-4">
      <div className="flex m-4 justify-between pt-20">
        <div className="mx-8">
          <div className="font-bold text-2xl my-4">
            Follow us on Social Media
          </div>
          <div className="flex justify-between w-6/12">
            <img
              src={TWITTER_IMG}
              className=""
              height={15}
              width={70}
              alt="twitter"
            ></img>
            <img
              src={FB_IMG}
              className=""
              height={15}
              width={70}
              alt="fb"
            ></img>
            <img
              src={INSTA_IMG}
              className=""
              height={20}
              width={70}
              alt="insta"
            ></img>
          </div>
          <div className="font-bold text-3xl my-4">Subscribe</div>
          <div className="my-4 text-lg font-medium">
            Subscribe to be the first one to get updated about our soft launch
            events
          </div>
          <div className="flex">
            <input className="rounded-lg w-48 h-8" type="email" placeholder="Enter your email" />
            <button className="ml-8 bg-white text-black font-bold w-32 h-8 rounded-lg">Subscribe</button>
          </div>
        </div>
        <div>
          <img
            className="mr-40 mb-4"
            height={500}
            width={500}
            src={AEROPLANE_IMG}
          ></img>
        </div>
      </div>
      <div className="flex justify-center py-4 py-4">
        <p className="">Copyright© 2023 Prayas75 - All Rights Reserved</p>
      </div>
    </div>
  );
};
