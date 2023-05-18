import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        pos={'fixed'}
        left={'4'}
        top={'4'}
        colorScheme="purple"
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'4'}
        zIndex={'overlay'}
      >
        <BiMenu size={'30'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'2'}
          >
            <BsFillCameraVideoFill />
            <div>Video Hub</div>
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log in</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
