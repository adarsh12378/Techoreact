import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
import{Link} from "react-router-dom"
// import{BiMenuAltLeft} from "react-icons/bi"
const Header = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <Button ref={btnRef}  
             zIndex={'overlay'}
             pos={'fixed'}
             top={'4'}
             left={'4'}
             colorScheme="purple"
             p={'0'}
             w={'10'}
             h={'10'}
             borderRadius={'full'}
             onClick={onOpen}>
                AAG
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Video Hub</DrawerHeader>

      
                <DrawerBody>
                  <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose}  variant ="ghost" colorScheme="purple">
             <Link to ={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose}  variant ="ghost" colorScheme="purple">
             <Link to ={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose}   variant ="ghost" colorScheme="purple">
             <Link to ={'/videos?category="free"'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose}  variant ="ghost" colorScheme="purple">
             <Link to ={'/upload'}>Upload Video</Link>
                    </Button>
                  
                  </VStack>
                </DrawerBody>
      
                <DrawerFooter>
                    <HStack> <Button onClick={onClose}   colorScheme="purple" variant='outline' margin={'6'} >
                   <Link to={'/Login'}>Log In</Link>
                  </Button>
                  <Button  onClick={onClose} colorScheme="purple" variant='outline' >
                  <Link to={'/Signup'}>Sign Up</Link>
                     </Button></HStack>
                
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }



export default Header
