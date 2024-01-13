import { Example } from "../types/common";

type ExampleItem = {
  name: string;
};
type ExampleMap = {
  [key: string]: ExampleItem;
};

const exampleMap: ExampleMap = {
  weather: { name: "Weather Effects" },
  waterMark: { name: "Water Mark" },
  ["3dSurround"]: { name: "3D Surround" },
  neomorphismStyle: { name: "Neomorphism Style" },
  gradientShadows: { name: "Gradient Shadows" },
  gradientBorder: { name: "Gradient Border" },
  gradientBorderButton: { name: "Gradient Button" },
  frostedGlassEffect: { name: "Frosted Glass Effect" },
  macTerminal: { name: "Mac Terminal" },
  pacmanLoading: { name: "Pacman Loading" },
  clipPath: { name: "Clip Path" },
  clayPotteryStyle: { name: "Clay Pottery Style" },
  planeFlyToPointer: { name: "Plane Fly To Pointer" },
};

export const getExampleDetail = (name: string): Example => {
  const exampleItem = exampleMap[name];
  return {
    path: `/example/${name}`,
    name: exampleItem?.name || "Title not set",
  };
};
