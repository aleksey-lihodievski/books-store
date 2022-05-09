import React, { useEffect, useState } from 'react';

import {
  DesktopNavigation,
  MobileMenuIcon,
  Mobile,
  NavBar,
  MobileNavigation,
  DesktopLinks,
  MobileLinks,
} from './styled';
import { useMediaQuery } from 'hooks/media';
import Container from 'components/Container';
import Title from 'components/Title';
import { desktopMedia } from 'constants/media';
import { links } from 'constants/links';

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
            <Mobile open={mobileNavModal} onClick={toggleMobileNav}>
              <MobileLinks links={links} />
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
