// import fs from "fs";
import { promises as fs, existsSync } from "fs";
import path from "path";

export const appPath = "./src/app";
export const examplePath = `${appPath}/example`;

console.log();

export const getExamples = async () => {
  const dir = await fs.readdir(path.resolve(process.cwd(), examplePath), { withFileTypes: true });
  return dir.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
};

export const getCodeByPath = async (filePath: string) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!existsSync(fullPath)) return "";
  return fs.readFile(fullPath, { encoding: "utf8" });
  // return fs.readFileSync(path);
};
