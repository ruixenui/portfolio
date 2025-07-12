"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  HomeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  FileTextIcon,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface NavbarProps {
  links?: { url: string; title: string }[];
}

export function HoverNavbar({ links = [] }: NavbarProps) {

  const navItems = [
    { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "#top" },
    {
      name: "About",
      icon: <FileTextIcon className="h-5 w-5" />,
      href: "#about",
    },
    {
      name: "Work",
      icon: <BriefcaseIcon className="h-5 w-5" />,
      href: "#work",
    },
    {
      name: "Projects",
      icon: <CodeIcon className="h-5 w-5" />,
      href: "#projects",
    },
    {
      name: "Education",
      icon: <GraduationCapIcon className="h-5 w-5" />,
      href: "#education",
    },
  ];

  // Handle navigation and smooth scrolling
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1));
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-2 md:pb-4"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-gray-200 bg-transparent shadow-xl backdrop-blur-3xl dark:border-gray-800 dark:bg-slate-900/80"
      >
        <nav className="flex items-center space-x-1 px-2 py-1 md:space-x-2 md:py-2.5">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-all hover:bg-gray-100 dark:hover:bg-slate-800 md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm"
              asChild
            >
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.icon}
                <span className="hidden xs:inline md:inline">{item.name}</span>
              </a>
            </Button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
