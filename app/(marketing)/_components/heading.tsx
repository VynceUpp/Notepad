"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xk space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & plans, all in one place. Welcome to {""}
        <span className="underline">Notepad</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notepad is the connected workspace where you can capture, work, and grow
        your ideas.
      </h3>
      <Button>
        Use Notepad
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  );
};
