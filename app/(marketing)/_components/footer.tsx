"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  const goToVynceUpp = () => {
    window.open("https://github.com/VynceUpp", "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full bg-background dark:bg-[#1d1d1d] z-50">
      <div className="flex items-center justify-center w-full">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs">&copy;2024</p>
        <Button variant="ghost" size="sm" onClick={goToVynceUpp}>
          VynceUpp
        </Button>
      </div>
    </div>
  );
};
