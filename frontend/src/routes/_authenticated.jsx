import { Outlet, createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import {isAuthenticated, signIn, signOut} from '@/lib/auth.js';

import {Login} from './_authentication/login.jsx';

export const Route = createFileRoute("/_authenticated")({
  component: () => {
    if (!isAuthenticated()) {
      return <Login />
    }

    return <Outlet />
  },
});



