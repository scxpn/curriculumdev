import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Page from "../../utils/components/Page";
import UserContainer from "./components/UserContainer";
import { useUser } from "../../contexts/UserContext";

export default () => {
  const { user } = useUser();

  return (
    <Page>
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        {user ? (
          <Flex w="100%" h="auto" justifyContent="center" alignItems="center">
            <UserContainer />
          </Flex>
        ) : (
          <Flex>
            <Text fontSize={["28px"]} color="gray.600">
              Pesquise um perfil.
            </Text>
          </Flex>
        )}
      </Flex>
    </Page>
  );
};
