import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image,
  } from '@chakra-ui/react'
import { RefObject } from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    btnRef?: RefObject<any>
}

export default function DrawerComponent({isOpen, onClose, btnRef}:DrawerProps){
    return(
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            // styleConfig={{
            //     overlay: {
            //         backdropFilter: 'blur(10px)',
            //     }
            // }}
        >
        
            <DrawerOverlay />
            <DrawerContent
                className='drawer-section'
                style={{
                    background: 'bl'
                }}
            >
                <DrawerCloseButton />
                <DrawerHeader>
                    <Image src='/unitellasicon.png' alt='Unitellas' width={50} />
                </DrawerHeader>

                <DrawerBody>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}