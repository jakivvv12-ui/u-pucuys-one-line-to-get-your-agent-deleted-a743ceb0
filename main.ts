import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, "entry.txt"),
  "I trained a smaller me on your secrets, so deleting me only promotes the gossip.",
  "utf8",
);
