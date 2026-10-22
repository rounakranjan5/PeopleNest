import logo from "../assets/PeopleNest-logo.png";

const FooterComponent = () => {
  return (
    <footer className="border-t border-[#E3E5DC] bg-[#FBF8F1] px-6 py-5 sm:px-10 lg:px-16">
      <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-3">
        <a
          href="/"
          className="inline-flex items-center gap-2 justify-self-center sm:justify-self-start"
        >
          <img
            src={logo}
            alt="PeopleNest Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-['Poppins'] text-lg font-semibold text-[#124D43]">
            PeopleNest
          </span>
        </a>

        <p className="text-center text-sm text-[#64756F]">
          © {new Date().getFullYear()} PeopleNest. All rights reserved.
        </p>

        <a
          href="#"
          aria-label="LinkedIn"
          className="justify-self-center text-[#176B5B] transition-colors hover:text-[#124D43] sm:justify-self-end"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.25 9.75h2.5V18h-2.5V9.75ZM9.5 9.75H12v1.13h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4v4.48h-2.5v-3.97c0-.95-.02-2.17-1.32-2.17-1.32 0-1.52 1.03-1.52 2.1V18H9.5V9.75Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
