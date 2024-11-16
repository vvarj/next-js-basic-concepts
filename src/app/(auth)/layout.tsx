"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      <p>Welcome to auth</p>
      <div className="bg-stone-50 p-5">
        {navLinks.map((navLink: any) => {
          const isActive = pathname.startsWith(navLink.href);
          return (
            <>
              <Link
                href={navLink.href}
                className={`ml-4 ${
                  isActive ? "text-blue-800 font-bold" : "text-green-600"
                }`}
              >
                {navLink.name}
              </Link>
            </>
          );
        })}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}

export default AuthLayout;
