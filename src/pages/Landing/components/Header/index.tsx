import {
  Flex,
  Box,
  Text,
  Stack,
  HStack,
  VStack,
  StackDivider,
  Avatar,
  Icon,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { formatToView } from "../../../../utils/helpers/formatToView";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { useUser } from "../../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { singularOrPlural } from "../../../../utils/singularOrPlural";

export default () => {
  const history = useHistory();
  const {
    repositories,
    user: { name, login, avatar_url, followers, following, bio, html_url },
  } = useUser();
  const size = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <HStack spacing={["8px", "12px"]} alignItems="center">
          <Avatar
            name={name}
            src={avatar_url}
            size={size === "sm" ? "md" : "lg"}
          />
          <VStack alignItems="flex-start" h="100%" spacing="auto" maxW="100%">
            <Text
              textAlign="start"
              color="gray.200"
              fontSize={["14px", "18px"]}
              fontWeight="bold"
              isTruncated
            >
              {size === "sm"
                ? (name && name.split(" ")[0]) || login.split(" ")[0]
                : name ?? login}
            </Text>

            <Link isExternal href={`${html_url}/?tab=repositories`}>
              <HStack
                w="100%"
                px={["0", "2"]}
                alignItems="center"
                spacing={["1", "1"]}
              >
                <Text color="gray.400" fontSize={["10.5px", "15px"]}>
                  {repositories && repositories.length > 0
                    ? formatToView(repositories?.length)
                    : size === "sm"
                    ? "0"
                    : "Nenhum repositório"}
                </Text>
                <Icon
                  as={RiGitRepositoryCommitsLine}
                  w={[2.5, 4]}
                  h={[2.5, 4]}
                  color="gray.400"
                />
              </HStack>
            </Link>
          </VStack>
        </HStack>

        <Box h="100%">
          <HStack h="100%" divider={<StackDivider borderColor="gray.200" />}>
            <Stack direction={["column", "row"]} spacing={["0", "auto"]}>
              <Text
                textAlign={["center", "unset"]}
                fontWeight="bold"
                color="gray.200"
                fontSize={["12px", "16px"]}
              >
                {formatToView(followers)}
              </Text>
              <Text color="gray.200" fontSize={["12px", "16px"]}>
                seguidores
              </Text>
            </Stack>
            <Stack direction={["column", "row"]} spacing={["0", "auto"]}>
              <Text
                textAlign={["center", "unset"]}
                fontWeight="bold"
                color="gray.200"
                fontSize={["12px", "16px"]}
              >
                {formatToView(following)}
              </Text>
              <Text color="gray.200" fontSize={["12px", "16px"]}>
                seguindo
              </Text>
            </Stack>
          </HStack>
        </Box>
      </Flex>
      {bio && (
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          mt={["2", "3"]}
        >
          <Text
            fontSize={["10px", "16px"]}
            textAlign={["justify", "unset"]}
            maxW="70%"
            as="cite"
            color="white"
          >
            " {bio} "
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
