import Link from "next/link";
import { Example } from "../types/common";
import { getExampleDetail } from "../utils/example";
import { getExamples } from "../utils/file";
import { GradientBorderButton } from "./example/gradientBorderButton";

export default async function Home() {
  const exampleNames = await getExamples();
  const examples: Example[] = exampleNames.map((example) => getExampleDetail(example));
  return (
    <div className="max-w-6xl min-h-full mx-auto py-10 px-6">
      <h2 className="font-bold text-3xl text-center">React Code Snippets</h2>
      <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {examples.map(({ path, name }) => (
          <Link key={path} href={path}>
            <li>
              <GradientBorderButton>{name}</GradientBorderButton>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
