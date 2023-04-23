import { HeaderStyled, IconBmo, ListUlHeader } from "./style"
import icon_bmo3 from "../../Assets/RGB_logo_black_blue.png"
import { Menu, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { HambergerMenu } from 'iconsax-react';

export const HeaderPage = () => {         

    return(
        <>
            <HeaderStyled>
                <nav>
                    <a className="Ico" href="/"><IconBmo src={icon_bmo3} alt="bmo-icon"/></a>
                    <ListUlHeader>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Cadastre-se</a></li>
                    </ListUlHeader>
                    <Menu>
                <MenuButton
                    className='drawler'
                    as={IconButton}
                    aria-label='Options'
                    icon={<HambergerMenu size="32" background="none" color="#969696"/>}
                    variant='outline'
                />
                <MenuList className='menuFlex'>
                    <a href="/login">
                        Login
                    </a>
                    <a href="/register">
                        Cadastre-se
                    </a>
                </MenuList>
                </Menu>
                </nav>
            </HeaderStyled>
        </>
    )
}