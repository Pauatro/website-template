import React, { ReactNode } from "react";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
      <div className="container mx-auto p-8 flex flex-col items-center justify-center">
        {children}
      </div>
  );
};
