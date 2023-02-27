import {
    Box,
    Flex,
    Link,
    Button,
    Image,
    useColorModeValue,
    Stack,
    useColorMode,
    Text,
    HStack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import avatarLogo from '../../public/logo.png'
import avatarLogoDark from '../../public/logo-black.png'

interface navbarInterface{ 

}

type LinkObject = {
    Title: string,
    Link: string
}

const Links: LinkObject[] = [
    {
        Title: "Home",
        Link: "/"
    }
];

const NavLink = ({ children, href }: { children: ReactNode, href: string}) => (

    <NextLink href={href}>
        <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
        </Link>
    </NextLink>
);

// const signAndSendTx=(txBurn: any) => {
//     await txBurn.
// }
let provider = null;
let accounts = null;


export const Navbar: React.FC<navbarInterface> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const login = async() => {
    }

    const logout = async() => {

    }

    return (
        <Flex position="sticky" top={0} zIndex={1} >
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width="100%">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
                <Image src={colorMode == 'light' ? avatarLogoDark.src : avatarLogo.src} alt="" maxWidth="20%"/>
                <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link.Title} href={link.Link}>{link.Title}</NavLink>
                ))}
                </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                
                </Stack>
            </Flex>
            </Flex>
        </Box>
        </Flex>
    );    
}