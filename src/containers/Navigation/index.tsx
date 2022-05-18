import React, { useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from 'hooks/media';
import Container from 'components/Container';
import Title from 'components/Title';
import { desktopMedia } from 'constants/media';
import { links } from 'constants/links';
import { DesktopNavigation } from './components/DesktopNavigation';
import { MobileMenuIcon } from './components/MobileMenuIcon';
import { MobileNavigation } from './components/MobileNavigation';
import { NavBar } from './components/NavBar';
import Links from './components/Links';
import MobileMenu from './components/MobileMenu';
import { useMountTransition } from 'hooks/mount';

interface NavigationProps {
  title?: string;
  hasImage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ title, hasImage }) => {
  const [scrolled, setScrolled] = useState(false || !hasImage);

  const isDesktop = useMediaQuery(desktopMedia);
  const [mobileNavModal, setMobileNavModal] = useState(false);
  const isAnimated = useMountTransition(!!mobileNavModal, 300);

  const toggleMobileNav = useCallback(() => {
    setMobileNavModal((open) => !open);
  }, []);

  const onCloseMobileNav = useCallback(() => {
    setMobileNavModal(false);
  }, []);

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
            <Links links={links} alignRight />
          </DesktopNavigation>
        ) : (
          <>
            {(mobileNavModal || isAnimated) && (
              <MobileMenu
                open={mobileNavModal}
                links={links}
                onCloseMobileMenu={onCloseMobileNav}
              />
            )}
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
