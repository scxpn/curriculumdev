import { useState } from "react";
import { useHistory } from "react-router";
import { Search2Icon } from "@chakra-ui/icons";
import { useUser } from "../../../contexts/UserContext";
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
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Header(props: any) {
  const history = useHistory();
  const { setUserId } = useUser();
  const [search, setSearch] = useState<string>("");
  const currentUrl = window.location.href;

  const handleSearch = () => {
    if (search !== "") {
      setUserId(search);
      setSearch("");
    }
  };
  const handleEnterSearch = (key: number) => {
    if (search !== "" && key === 13) {
      setUserId(search);
      setSearch("");
    }
  };

  const size = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <Box {...props} w="100%" h={["10%"]}>
      <Flex
        cursor="pointer"
        alignItems="center"
        onClick={() => history.push("/")}
      >
        {/* <Image src={"/assets/png/logo.png"} h={["55px", "75px"]} /> */}
        <Text
          ml={["4px", "8px"]}
          fontSize={["16px", "24px"]}
          color="white"
          fontFamily="Tomorrow"
        >
          CurriculumDev
        </Text>
      </Flex>

      {!props.hideSearch && (
        <Flex justifyContent="flex-end" alignItems="center">
          <InputGroup size={size} maxW={["60%", "90%"]}>
            <Input
              value={search}
              color="gray.200"
              fontSize={["12px", "16px"]}
              onChange={(e: any) => setSearch(e.target.value)}
              h={["25px", "35px"]}
              onKeyDown={(e: any) => handleEnterSearch(e.keyCode)}
            />
            <InputRightElement
              w="auto"
              h="100%"
              px={["6px", "8px"]}
              alignItems="center"
              onClick={() => handleSearch()}
              children={
                <Search2Icon
                  cursor="pointer"
                  color="gray.400"
                  w={["12px", "18px"]}
                />
              }
            />
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
}
