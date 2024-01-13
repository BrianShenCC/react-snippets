import { ReactNode } from "react";
import ShowCaseLayout from "../../../components/ShowCaseLayout";

export default async function Layout({ children }: { children: ReactNode }) {
  return <ShowCaseLayout>{children}</ShowCaseLayout>;
}
