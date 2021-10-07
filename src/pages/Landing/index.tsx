import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Page from "../../utils/components/Page";
import UserContainer from "./components/UserContainer";
import { useUser } from "../../contexts/UserContext";

export default () => {
  const { userId, user, setUser } = useUser();

  useEffect(() => {
    if (userId !== "") {
      fetch(`https://api.github.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [userId]);

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
