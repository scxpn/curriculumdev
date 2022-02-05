import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { Children, User } from "../../types";

export default () => {
  const location = useLocation();
  const { onClose } = useDisclosure();
  const { handleUserFollow, follows } = useUser();
  const history = useHistory();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    handleUserFollow(location.pathname);
  }, []);

  let title = location.pathname.replace("/", "");
  title = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <Modal isOpen onClose={() => history.push("/")} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
