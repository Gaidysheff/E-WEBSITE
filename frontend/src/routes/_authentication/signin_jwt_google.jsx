import Google from "./../../assets/images/shared/google.png";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authentication/signin_jwt_google")({
  component: SignIn,
});

function SignIn() {
  return (
    <div className="bg-card flex items-center justify-center min-h-screen px-4">
      <div
        className="bg-card shadow-xl rounded-2xl p-6 sm:p-10 max-w-sm w-full
        flex flex-col gap-6 border border-primary"
      >
        <h2
          className="text-xl 2xsm:text-2xl xsm:text-3xl font-semibold 
          text-center text-primaryDark"
        >
          Welcome!
        </h2>

        <form>
          <button
            className="w-full flex items-center cursor-pointer justify-center
            border border-primary/30 hover:border-gray-500 text-primaryDark py-3
            text-xs 2xsm:text-sm xsm:text-lg rounded-lg shadow-sm transition-all
            duration-300 bg-card hover:bg-gray-400
            hover:scale-110 hover:text-white"
          >
            <img
              src={Google}
              alt="Google Icon"
              width={30}
              height={30}
              className="mr-3"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
