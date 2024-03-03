import type { FC } from "react";
import { LogoutButton } from "../../../auth/ui/components/LogoutButton";
import { Layout } from "../../../shared/ui/components/Layout";
import {
  HighlightedLink,
  TextLinkElement,
  WrapperLink,
  WrapperLinkProps,
} from "../../../shared/ui/components/Link";
import { Header } from "../../../shared/ui/components/Header";
import Icon from "../../../shared/ui/components/Icon";

export const HomeScreen: FC = () => {
  const elements: TextLinkElement[] = [
    {
      text: "test",
      link: "www.youtube.com",
    },
    {
      text: "testy",
      link: "www.youtube.com",
    },
    {
      text: "testesty",
      link: "www.youtube.com",
    },
    {
      text: "testytesty",
      link: "www.youtube.com",
    },
  ];

  const iconElements: WrapperLinkProps[] = [
    {
      link: "www.youtube.com",
      children: <Icon type="eyeOn" />,
    },
    {
      link: "www.youtube.com",
      children: <Icon type="eyeOff" />,
    },
  ];

  return (
    <>
      <Header>
        <div className="w-full flex justify-center gap-5">
          {elements.map((element: TextLinkElement) => (
            <HighlightedLink {...element} key={element.text} />
          ))}
        </div>
        <div className="w-full flex justify-center gap-5">
          {iconElements.map((element: WrapperLinkProps) => (
            <WrapperLink {...element} />
          ))}
        </div>
      </Header>
      <Layout>
        <div className="w-1/2 max-w-4xl min-w-min flex flex-col gap-2 items-center">
          <LogoutButton />
        </div>
      </Layout>
    </>
  );
};
