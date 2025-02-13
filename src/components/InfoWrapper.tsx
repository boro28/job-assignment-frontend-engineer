import { HTMLProps, PropsWithChildren } from "react";
export default function InfoWrapper({
  children,
  className = "",
}: PropsWithChildren<HTMLProps<HTMLDivElement>>): JSX.Element {
  return <div className={"m-x-auto m-y-2" + " " + className}> {children}</div>;
}
