
import { Button } from "flowbite-react";
import illustration from "../assets/illustration.png";

const HeroContent = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 bg-[#F8FAF7] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-[0.15em] text-[#176B5B]">
            SMART CONTACT MANAGER
          </h3>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#102F35] sm:text-5xl">
            Your Contacts, Organized. Always.
          </h1>

          <p className="max-w-lg text-base leading-7 text-[#455B5D]">
            PeopleNest helps you store, manage, and stay connected
            with the people that matter — all in one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            color="green"
            className="bg-[#176B5B] text-white hover:bg-[#124D43] focus:ring-2 focus:ring-[#176B5B]"
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Get Started Free
          </Button>

          <Button
            color="light"
            className="border border-[#176B5B] bg-transparent text-[#176B5B] hover:bg-[#EAF3EF]"
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={illustration}
          alt="A person managing contacts on a laptop"
          className="block w-full max-w-145 h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default HeroContent;
