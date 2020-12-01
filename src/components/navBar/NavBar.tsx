import React, { FC, useState } from 'react';
import { BlogName } from '../../constants/common';
import { Layout, MasterLayout, WebsiteName } from './NavBar.styles';
import BurgerMenu from '../../assets/icons/menu.svg';
import { useMediaQuery } from '../../constants/responsive';
import breakpoints from '../../constants/breakpoints';
import NavBarItems from './navBarItems/NavBarItems';
import Close from '../../assets/icons/close.svg';
import Link from 'next/link';

const NavBar: FC = () => {
  const isMobile: boolean = useMediaQuery(`(max-width: ${breakpoints[960]})`);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <MasterLayout>
      <Layout>
        <Link href={'/'}>
          <WebsiteName>{BlogName}</WebsiteName>
        </Link>
        {isMobile &&
          (isOpen ? (
            <Close onClick={() => setOpen(!isOpen)} />
          ) : (
            <BurgerMenu onClick={() => setOpen(!isOpen)} />
          ))}
        {!isMobile && <NavBarItems />}
      </Layout>
      {isMobile && isOpen && <NavBarItems />}
    </MasterLayout>
  );
};

export default NavBar;
