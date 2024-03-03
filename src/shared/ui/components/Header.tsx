import { FC, ReactNode } from "react";

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="px-4 lg:px-6 py-2.5 w-full flex">{children}</div>;
};
