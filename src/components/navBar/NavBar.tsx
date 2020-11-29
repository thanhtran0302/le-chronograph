import React, { FC, useState } from 'react';
import { BlogName } from '../../constants/common';
import { Layout, MasterLayout, WebsiteName } from './NavBar.styles';
import BurgerMenu from '../../assets/icons/menu.svg';
import { useMediaQuery } from '../../constants/responsive';
import breakpoints from '../../constants/breakpoints';
import NavBarItems from '../navBarItems/NavBarItems';

const NavBar: FC = () => {
  const isMobile: boolean = useMediaQuery(`(max-width: ${breakpoints[1200]})`);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <MasterLayout>
      <Layout>
        <WebsiteName>{BlogName}</WebsiteName>
        {isMobile && <BurgerMenu onClick={() => setOpen(!isOpen)} />}
        {!isMobile && <NavBarItems />}
      </Layout>
      {isMobile && isOpen && <NavBarItems />}
    </MasterLayout>
  );
};

export default NavBar;
