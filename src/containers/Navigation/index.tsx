import React, { useEffect, useState } from 'react';

import {
  DesktopNavigation,
  MobileMenuIcon,
  Mobile,
  NavBar,
  MobileNavigation,
  DesktopLinks,
} from './styled';
import { useMediaQuery } from 'hooks/media';
import Links from './components/Links';
import Container from 'components/Container';
import Title from 'components/Title';

interface NavigationProps {
  title?: string;
  hasImage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ title, hasImage }) => {
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
          <DesktopNavigation>
            {title && !hasImage && <Title white>{title}</Title>}
            <DesktopLinks />
          </DesktopNavigation>
        ) : (
          <>
            <Mobile open={mobileNavModal} onClick={toggleMobileNav}>
              <Links />
            </Mobile>
            <MobileNavigation>
              {title && !hasImage && <Title white>{title}</Title>}
              <MobileMenuIcon onClick={toggleMobileNav} />
            </MobileNavigation>
          </>
        )}
      </Container>
    </NavBar>
  );
};

export default React.memo(Navigation);
