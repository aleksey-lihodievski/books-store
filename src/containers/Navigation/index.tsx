import React, { useEffect, useState } from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import Container from 'components/Container';
import { Desktop, MobileMenuIcon, Mobile, NavBar } from './styled';

import useMediaQuery from 'hooks/media';
import Links from './common-components/Links';

interface NavigationProps {
  hasImage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ hasImage }) => {
  const [scrolled, setScrolled] = useState(false || !hasImage);

  const isDesktop = useMediaQuery('(min-width: 992px)');
  const [mobileNavModal, setMobileNavModal] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavModal(!mobileNavModal);
  };

  useEffect(() => {
    const handleChangeNavbar = () => {
      if (window.scrollY >= 100) setScrolled(true);
      else setScrolled(false || !hasImage);
    };

    window.addEventListener('scroll', handleChangeNavbar);

    return () => window.removeEventListener('scroll', handleChangeNavbar);
  }, [setScrolled, hasImage]);

  return (
    <NavBar scrolled={scrolled}>
      <Container>
        {isDesktop ? (
          <Desktop>
            <Links />
          </Desktop>
        ) : (
          <>
            <Mobile open={mobileNavModal} onClick={toggleMobileNav}>
              <Links />
            </Mobile>
            <MobileMenuIcon onClick={toggleMobileNav} />
          </>
        )}
      </Container>
    </NavBar>
  );
};

export default React.memo(Navigation);
