import loginIllustration from "../assets/login-illustration.png";
import signupIllustration from "../assets/signup-illustration.png";

const AuthComponent = ({ mode = "login" }) => {
  const isSignup = mode === "signup";
  const illustration = isSignup ? signupIllustration : loginIllustration;

  return (
    <main className="min-h-screen bg-[#FBF8F1] px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(20,47,43,0.08)] lg:grid-cols-2">
        <section className="hidden bg-[#EAF3EF] p-10 lg:flex lg:flex-col">
          <div className="mt-16">
            <h1 className="max-w-sm text-4xl font-semibold leading-tight text-[#102F35]">
              {isSignup ? "Create Your Account" : "Welcome Back"}
            </h1>
            <p className="mt-4 max-w-sm leading-7 text-[#64756F]">
              {isSignup
                ? "Join PeopleNest and start managing your contacts today."
                : "Log in to your account to continue managing your contacts."}
            </p>
          </div>

          <img
            src={illustration}
            alt={isSignup ? "Person creating a PeopleNest account" : "Person logging in to PeopleNest"}
            className="mt-auto w-full object-contain"
          />
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-[#102F35]">
              {isSignup ? "Sign Up" : "Log In"}
            </h2>
            <p className="mt-2 text-sm text-[#64756F]">
              {isSignup
                ? "It's quick and easy."
                : "Enter your details to get started."}
            </p>

            <form className="mt-8 space-y-4">
              {isSignup && (
                <label className="block text-sm font-medium text-[#102F35]">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="pn-input mt-2"
                    required
                  />
                </label>
              )}

              <label className="block text-sm font-medium text-[#102F35]">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="pn-input mt-2"
                  required
                />
              </label>

              <label className="block text-sm font-medium text-[#102F35]">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder={isSignup ? "Create a password" : "Enter your password"}
                  className="pn-input mt-2"
                  required
                />
              </label>

              {!isSignup && (
                <div className="flex items-center justify-between text-sm">
                 
                  <a href="/forgot-password" className="font-medium text-[#176B5B] hover:text-[#124D43]">
                    Forgot password?
                  </a>
                </div>
              )}

              <button type="submit" className="pn-btn pn-btn-primary w-full">
                {isSignup ? "Create Account" : "Log In"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs text-[#64756F]">
              <span className="h-px flex-1 bg-[#E3E5DC]" />
              or
              <span className="h-px flex-1 bg-[#E3E5DC]" />
            </div>

            <div className="space-y-3">
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E3E5DC] px-4 py-2.5 text-sm text-[#455B5D] hover:bg-[#F4F2EA]">
                <svg
                  className="h-6 w-6 shrink-0 text-[#4285F4]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue with Google
              </button>
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E3E5DC] px-4 py-2.5 text-sm text-[#455B5D] hover:bg-[#F4F2EA]">
                <svg
                  className="h-6 w-6 shrink-0 text-[#142F2B]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-[#64756F]">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <a href={isSignup ? "/login" : "/signup"} className="font-medium text-[#176B5B] hover:text-[#124D43]">
                {isSignup ? "Log In" : "Sign Up"}
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthComponent;
