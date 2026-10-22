import FeatureCard from "./FeatureCard";
import mobileIllustration from "../assets/mobile-illustration.png";

const featureItems = [
  {
    title: "Manage Contacts",
    description:
      "Add, edit, delete and search contacts with ease. Mark your favourites and keep them organized.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.4-3 2.2-4.5 5.5-4.5s5.1 1.5 5.5 4.5M15 14.8c2.8-.1 4.5 1.3 5 3.7" />
      </svg>
    ),
  },
  {
    title: "Send Emails",
    description: "Compose and send emails, with support for attachments and more.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: "Secure Authentication",
    description: "Sign up with email, Google or GitHub. Your data stays safe with us.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </svg>
    ),
  },
  {
    title: "Upload Photos",
    description: "Store contact photos securely.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 18h12a3 3 0 0 0 .5-5.96A6.5 6.5 0 0 0 6 10a4 4 0 0 0 0 8Z" />
        <path d="m12 15 0-5m0 0-2 2m2-2 2 2" />
      </svg>
    ),
  },
  {
    title: "Export to Excel",
    description: "Need a backup? Export your contacts to Excel anytime.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h4M9 13l4 4m0-4-4 4" />
      </svg>
    ),
  },
  {
    title: "Personalize Your Experience",
    description: "Edit your profile, share feedback and more.",
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c.7-3.2 3-5 7-5s6.3 1.8 7 5" />
      </svg>
    ),
  },
];

const FeatureComponent = ({ features = featureItems }) => {
  return (
    <section id="features" className="bg-[#FBF8F1] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-16">
        <div>
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-[#102F35] sm:text-4xl">
            Everything You Need
            <br />
            in One Place
          </h2>
          <div className="mt-4 h-1 w-8 rounded-full bg-[#176B5B]" />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={mobileIllustration}
            alt="PeopleNest contacts on a mobile phone"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
