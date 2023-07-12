/* eslint-disable react/no-string-refs */
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Text
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import NextLink from 'next/link'
import { motion } from 'framer-motion';



  const NavLink = ({ pathText, pathTo }: {pathText: string, pathTo: string}) => {
    return(
      <NextLink href={pathTo} passHref>
        <Link
          px={2} py={1}
          rounded={'md'}
          color={'white'}
          fontWeight={'bold'}
          position="relative"
          _hover={{
            textDecoration: 'none',
            bg: '#1379b4',
          }}>
          {pathText}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 3 }}
            style={{ height: '2px', background: '#1379b4', position: 'absolute', left: 10, bottom: 0 }}
          />
        </Link>
      </NextLink>
    )
  };


export default function NavigationMenuBar() {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Flex 
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        // mb={8}
        p={2}
        bg={`url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')`} 
        position="sticky"
        top={0}
        zIndex={10000}
      >
        <Flex align="center">
          <Image src='/unitellas-logo.png' alt='Unitellas' width={210} />
        </Flex>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
          hideBelow={'md'}
        >

          <Flex
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
              <NavLink pathText='Platform' pathTo=''  />
              <NavLink pathText='Solutions' pathTo='/solutions'  />
              <NavLink pathText='About Us' pathTo='/about'  />
              <NavLink pathText='Contact' pathTo='/contact'  />
          </Flex>
        </Box>
        <Box
          hideFrom={'md'}
          // flexBasis={{ base: "100%", md: "auto" }}
        >
          {isOpen ? <CloseIcon color={'white'} fontSize={35} onClick={onToggle} /> : <HamburgerIcon color={'white'} fontSize={35} onClick={onToggle} />}
        </Box>
      </Flex>
  )
}