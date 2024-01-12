import { Cloudy, Nighty, Rainy, Snowy, Sunny } from ".";

export default function Weather() {
  return (
    <>
      <div className="p-4 flex w-full gap-8 flex-wrap md:flex-nowrap md:overflow-x-auto">
        <Sunny></Sunny>
        <Rainy></Rainy>
        <Snowy></Snowy>
        <Cloudy></Cloudy>
        <Nighty></Nighty>
      </div>
      <div className="mt-8">
        <p className="py-1">
          来源:{" "}
          <a
            href="https://grinzero.github.io/magic-design-react/weather"
            target="_blank"
            className="text-cyan hover:underline"
          >
            https://grinzero.github.io/magic-design-react/weather
          </a>
        </p>
      </div>
    </>
  );
}
