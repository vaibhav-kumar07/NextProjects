"use client";
import React from "react";
import Detail from "./common/Details";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export default function WordCounter() {
  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [linesCount, setLinesCount] = useState(0);

  function handleTextChange(e: any) {
    const newText = e.target.value;
    setCharactersCount(calculateCharactersWithoutSpaces(newText));
    setWordsCount(calculateWordLengths(newText).length);
    setLinesCount(calculateLines(newText));
  }

  function calculateCharactersWithoutSpaces(text: string) {
    const charactersWithoutSpaces = text.replace(/\s/g, ""); // Remove all spaces
    return charactersWithoutSpaces.length;
  }
  function calculateWordLengths(text: string) {
    if (text.trim() === "") {
      return [];
    }

    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // Remove special characters
    const words = cleanedText.split(/\s+/);

    // Check if the last word has a trailing space and no text after that
    if (
      text.endsWith(" ") &&
      words.length > 0 &&
      words[words.length - 1] === ""
    ) {
      words.pop(); // Remove the last empty word
    }

    const wordLengths: number[] = words.map((word) => word.length);
    console.log(wordLengths, "wordLengths");
    return wordLengths;
  }

  function calculateLines(text: string) {
    if (text.trim() === "") {
      return 0;
    }

    const linesCount = text
      .split(".") // Split the text based on periods
      .map((sentence) => sentence.trim()) // Trim each sentence to remove leading/trailing spaces
      .filter((sentence) => sentence !== "").length; // Remove empty sentences

    return linesCount;
  }

  return (
    <div className="w-1/2  h-full flex flex-col gap-2 justify-center items-center ">
      <Textarea
        className="min-h-64 tracking-wider font-semibold border rounded-lg overflow-y-auto bg-primary-foreground text-primary outline-green-400 placeholder:text-center"
        placeholder="Unleash your thoughts: lines, words, and characters eagerly await your creation..."
        onChange={handleTextChange}
      />

      <div className="w-full flex py-3 border rounded-lg items-center">
        <Detail label="Characters" value={charactersCount} className="w-1/3" />
        <Detail label="Words" value={wordsCount} className="w-1/3" />
        <Detail label="Lines" value={linesCount} className="w-1/3" />
      </div>
    </div>
  );
}
