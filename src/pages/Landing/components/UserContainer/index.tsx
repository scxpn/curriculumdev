import { useUser } from "../../../../contexts/UserContext";
import { User } from "../../../../utils/types";
import { formatToView } from "../../../../utils/helpers/formatToView";
import {
  Flex,
  Box,
  Text,
  Input,
  Image,
  InputGroup,
  Avatar,
  Icon,
  HStack,
  StackDivider,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";

export default () => {
  const { user } = useUser();
  const { name, login, avatar_url, followers, following }: User = user;

  const size = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <Box
      w={["90%", "50%"]}
      h="100%"
      bg="#1a202c"
      p={["10px", "20px"]}
      borderRadius="8px"
    >
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <HStack spacing={["8px", "12px"]} alignItems="center">
          <Avatar
            name={name}
            src={avatar_url}
            size={size === "sm" ? "md" : "lg"}
          />
          <Text color="gray.200" fontSize={["14px", "18px"]} fontWeight="bold">
            {name}
          </Text>
        </HStack>

        <Box h="auto">
          <HStack divider={<StackDivider borderColor="gray.200" />}>
            <Text color="gray.200" fontSize={["12px", "16px"]}>
              <b>{formatToView(followers)}</b> seguidores
            </Text>
            <Text color="gray.200" fontSize={["12px", "16px"]}>
              <b>{formatToView(following)}</b> seguindo
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
