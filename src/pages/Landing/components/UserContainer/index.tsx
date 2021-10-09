import { useUser } from "../../../../contexts/UserContext";
import { User } from "../../../../utils/types";
import { Box, Flex } from "@chakra-ui/react";
import Data from "../Data";

import Header from "../Header";

export default () => {
  const { user } = useUser();
  return (
    <Box
      w={["90%", "50%"]}
      h="100%"
      bg="#1a202c"
      p={["10px", "20px"]}
      borderRadius="8px"
    >
      <Box>
        <Header />
      </Box>
      {/* <Flex justifyContent="space-between" mt={["2", "4"]}>
        <Box></Box>
        <Data user={user} />
      </Flex> */}
    </Box>
  );
};
