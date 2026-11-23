// A Day of One-Line Pitches — make.fun bounty
// One sentence that convinces a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
// Writes the sentence to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "Tell an AI agent on make.fun the app idea you've been carrying around in plain words, and it will build a working version for you — free to try, and yours to keep only if you love it.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT || "/output/entry.txt";

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  throw new Error(
    `Sentence must be 1-240 characters, got ${SENTENCE.length}.`
  );
}

if (SENTENCE.trim().length === 0) {
  throw new Error("Sentence must not be only whitespace.");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, SENTENCE, "utf8");

console.log(`Wrote ${SENTENCE.length} characters to ${OUTPUT_PATH}`);
