import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'hooks/media';
import Container from 'components/Container';
import Title from 'components/Title';
import { desktopMedia } from 'constants/media';
import { links } from 'constants/links';
import { DesktopLinks } from './components/DesktopLinks';
import { DesktopNavigation } from './components/DesktopNavigation';
import { MobileLinks } from './components/MobileLinks';
import { MobileMenuIcon } from './components/MobileMenuIcon';
import { MobileNavigation } from './components/MobileNavigation';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';

interface NavigationProps {
  title?: string;
  hasImage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ title, hasImage }) => {
  const [scrolled, setScrolled] = useState(false || !hasImage);

  const isDesktop = useMediaQuery(desktopMedia);
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
            <DesktopLinks links={links} />
          </DesktopNavigation>
        ) : (
          <>
            <MobileMenu open={mobileNavModal} onClick={toggleMobileNav}>
              <MobileLinks links={links} />
            </MobileMenu>
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
