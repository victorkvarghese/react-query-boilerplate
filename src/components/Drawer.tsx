import { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  InputGroup,
  Input,
  Select,
  InputLeftAddon,
  InputRightAddon,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IAddPost } from '../models/common/post';

interface IProps {
  onSubmit: (data: IAddPost) => void;
}

export const ChakraDrawer: React.FC<IProps> = (props) => {
  const { onSubmit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef(null);

  const onPress = () => {
    onSubmit({ title: 'Do Laundry', body: 'Hello', userId: 1 });
    onClose();
  };

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        CREATE
      </Button>
      <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Create a new post</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Title</FormLabel>
                <Input ref={firstField} id="username" placeholder="Please enter title" />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input type="url" id="url" placeholder="Please enter domain" />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Category</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="male">Automobile</option>
                  <option value="female">Sports</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onPress}>
              Create
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
