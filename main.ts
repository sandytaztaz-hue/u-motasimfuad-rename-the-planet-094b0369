import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryLine =
  "Rename Uranus 'The New Hire': it rotates on its side and nobody has figured out how it works yet.";

const outputDir = "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, entryLine, "utf8");

console.log(`Wrote entry to ${outputFile}`);
