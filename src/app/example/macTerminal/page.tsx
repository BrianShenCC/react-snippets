export default function MacTerminal() {
  const language = "Bash";
  const code = ["git clone https://github.com/BrianShenCC/react-snippets", "cd example", "pnpm i", "pnpm run dev"];
  return (
    <div>
      <div className="group relative flex h-64 w-full cursor-pointer flex-col overflow-hidden rounded-lg bg-gray-900 text-gray-700">
        <div className="relative flex h-12 w-full items-center border-b-2 border-gray-800">
          <div className="ml-4 flex">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="ml-2 h-3 w-3 rounded-full bg-yellow-400" />
            <div className="ml-2 h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center font-semibold">
            {language}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start p-4 font-mono">
          {code.map((c, i) => (
            <p key={i} className="flex items-center">
              <span className="mr-2 inline-block select-none font-bold">$</span>
              <span className="inline-block text-gray-200">{c}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
