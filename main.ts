// One-Line Office Joke: 24-Hour Sprint
// Writes a single office joke (<= 200 chars, one line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office printer has been 'warming up' since Tuesday, which officially makes it our most reliable employee: it never actually does anything.";

// Write exactly the joke, no trailing newline, so the file is one clean line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to /output/entry.txt`);
