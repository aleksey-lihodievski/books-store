import React, { useState } from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import Container from 'components/Container';
import { Desktop, MobileMenuIcon, Mobile, NavBar, NavBarLink } from './styled';

import useMediaQuery from 'hooks/media';

interface IProps {
  hasImage?: boolean;
}

const Navigation: React.FC<IProps> = ({ hasImage }) => {
  const [scrolled, setScrolled] = useState(false || !hasImage);

  const isDesktop = useMediaQuery('(min-width: 992px)');
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
        {isDesktop ? (
          <Desktop>
            <NavBarLink to='/products'>Products</NavBarLink>
            <NavBarLink to='/cart'>Cart</NavBarLink>
          </Desktop>
        ) : (
          <>
            <Mobile open={mobileNavModal} onClick={toggleMobileNav}>
              <NavBarLink to='/products'>Products</NavBarLink>
              <NavBarLink to='/cart'>Cart</NavBarLink>
            </Mobile>
            <MobileMenuIcon onClick={toggleMobileNav} />
          </>
        )}
      </Container>
    </NavBar>
  );
};

export default React.memo(Navigation);
