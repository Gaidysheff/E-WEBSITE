import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { isAuthenticated, signIn, signOut } from "@/lib/auth.js";

import { useEffect } from 'react';

export const Route = createFileRoute('/_authentication/login')({
  component: Login,
})

function Login() {
  const router = useRouter();

  return (
    <>
      <h2>Login</h2>
			{/* <Link className="nav-btn" to="/login">
          LogIn
        </Link>		 */}
			<br />
      {isAuthenticated() ? (
        <>
          <div>Hello user!</div>{" "}
          <button className="nav-btn"
            onClick={async () => {
              signOut();
              router.invalidate();
            }}
          >
            SignOut
          </button>
        </>
      ) : (
        <button className="nav-btn"
          onClick={async () => {
            signIn();
            router.invalidate();
          }}
        >
          SignIn
        </button>
      )}
			<br />
			<br />
    </>
  );
}
