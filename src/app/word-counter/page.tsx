import { Label } from "@/components/ui/label";
import WordCounter from "@/components/word-counter";
import React from "react";

export default function WordCounterPage() {
  return (
    <section className=" w-full h-full bg-primary-foreground text-primary  flex flex-col justify-center items-center ">
      <div className=" my-auto w-full flex flex-col  gap-3 justify-center items-center ">
        <Label className=" font-bold text-xl  tracking-wider">
          Word Counter
        </Label>
        <WordCounter />
      </div>
    </section>
  );
}
