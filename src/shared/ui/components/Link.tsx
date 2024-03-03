import type { FC, ReactNode } from "react";

export interface LinkElement {
  link: string;
}
export interface TextLinkElement extends LinkElement {
  text: string;
}

export interface WrapperLinkProps extends LinkElement {
  children: ReactNode;
}

export const HighlightedLink: FC<TextLinkElement> = ({ text, link }) => {
  return (
    <a
      href={link}
      className="px-4 py-2.5 transition-all hover:text-white hover:bg-black rounded-md"
    >
      {text}
    </a>
  );
};

export const WrapperLink: FC<WrapperLinkProps> = ({ link, children }) => {
  return (
    <a href={link} className="px-4 py-2.5 transition-all hover:text-white">
      {children}
    </a>
  );
};
