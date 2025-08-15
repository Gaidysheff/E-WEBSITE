import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants.js";
import { Link, Outlet, createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import {isAuthenticated, signIn, signOut} from '@/lib/auth.js';
import { useEffect, useState } from "react";

import api from "@/api.js";
import { jwtDecode } from "jwt-decode";
import { useAuth } from '@/store/AuthContext.jsx';

export const Route = createFileRoute("/_authenticated")({
  // beforeLoad: async ({authContext}) => {
  beforeLoad: async ({location}) => {
    // if (!authContext.auth.isAuthenticated) {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
        // search: {
        //   redirect: location.href,
        // },
      })
    }
  },

});

