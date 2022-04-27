import React, { CSSProperties, useState } from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import Container from 'components/Container';
import {
  Desktop,
  Mobile,
  MobileMenuIcon,
  MobileNavModal,
  NavBar,
  NavBarLink,
} from './styled';
import { NavLink } from 'react-router-dom';

interface IProps {
  hasImage?: boolean;
}

const Navigation: React.FC<IProps> = ({ hasImage }) => {
  const [scrolled, setScrolled] = useState(false || !hasImage);
  const [mobileNavModal, setMobileNavModal] = useState(false);

  const handleChangeNavbar = () => {
    if (window.scrollY >= 100) setScrolled(true);
    else setScrolled(false || !hasImage);
  };

  const toggleMobileNav = () => {
    setMobileNavModal(!mobileNavModal);
  };

  window.addEventListener('scroll', handleChangeNavbar);

  return (
    <NavBar scrolled={scrolled}>
      <Container>
        <Desktop>
          <NavBarLink to='/products'>Products</NavBarLink>
          <NavBarLink to='/cart'>Cart</NavBarLink>
        </Desktop>
        <Mobile>
          {mobileNavModal && (
            <MobileNavModal open={mobileNavModal} onClick={toggleMobileNav}>
              <NavBarLink to='/products'>Products</NavBarLink>
              <NavBarLink to='/cart'>Cart</NavBarLink>
            </MobileNavModal>
          )}
          <MobileMenuIcon onClick={toggleMobileNav} />
        </Mobile>
      </Container>
    </NavBar>
  );
};

export default React.memo(Navigation);
