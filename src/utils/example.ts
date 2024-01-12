import { Example } from "../types/common";

type ExampleItem = {
  name: string;
};
type ExampleMap = {
  [key: string]: ExampleItem;
};

const exampleMap: ExampleMap = {
  weather: { name: "Dynamic Weather Effects" },
  waterMark: { name: "Water Mark" },
};

export const getExampleDetail = (name: string): Example => {
  const exampleItem = exampleMap[name];
  return {
    path: `/example/${name}`,
    name: exampleItem?.name || "Title not set",
  };
};
