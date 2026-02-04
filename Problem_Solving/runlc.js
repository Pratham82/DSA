const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const problem = process.argv[2];
const lang = (process.argv[3] || "js").toLowerCase();

if (!problem) {
  console.log("❌ Please provide a problem number.");
  console.log("Usage: npm run lc 53 [js|py]");
  process.exit(1);
}

const basePath = path.join(__dirname, "Leetcode");

// Read all folders inside Leetcode/
const folders = fs.readdirSync(basePath);

// Match folder ignoring leading zeros → "053" == "53"
const match = folders.find((folder) => {
  const folderNum = folder.split(".")[0]; // "053"
  return Number(folderNum) === Number(problem);
});

if (!match) {
  console.log(`❌ Problem '${problem}' not found.`);
  process.exit(1);
}

//
// ─── JAVASCRIPT RUNNER ──────────────────────────────────────────────
//
if (lang === "js") {
  const filePath = path.join(basePath, match, "solution.js");

  if (!fs.existsSync(filePath)) {
    console.log(`❌ solution.js not found inside '${match}'.`);
    process.exit(1);
  }

  console.log(`▶️ Running JavaScript: ${match}/solution.js...\n`);

  spawn("npx", ["nodemon", filePath], {
    stdio: "inherit",
  });

  return;
}

//
// ─── PYTHON RUNNER (WATCHDOG) ──────────────────────────────────────────────
//
if (lang === "py" || lang === "python") {
  const filePath = path.join(basePath, match, "solution.py");

  if (!fs.existsSync(filePath)) {
    console.log(`❌ solution.py not found inside '${match}'.`);
    process.exit(1);
  }

  console.log(`▶️ Watching Python: ${match}/solution.py`);
  console.log("🔁 Auto-reload enabled (watchdog)\n");

  // 🔥 Use the correct Python path (with watchdog installed)
  spawn("/opt/homebrew/bin/python3", [path.join(__dirname, "py-watcher.py"), filePath], {
    stdio: "inherit",
  });

  return;
}

console.log("❌ Unsupported language. Use: js | py");
process.exit(1);

