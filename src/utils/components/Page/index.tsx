import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header";

type Props = {
  children?: ReactNode;
  hideSearch?: boolean;
  hasFooter?: boolean;
};

export default ({ children, hasFooter, hideSearch = false }: Props) => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh" bgColor="gray.900">
      <Header
        d="flex"
        p={["20px 16px 20px 0", "20px 8px 20px 0"]}
        justifyContent="space-between"
        alignItems="center"
        bgColor="blackAlpha.700"
        hideSearch={hideSearch}
      />
      {children}
    </Flex>
  );
};
