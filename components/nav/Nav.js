import { Link, Modal, Text, Tooltip } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { colors, fontSizes, viewports } from '../../styles/theme/settings';
import useScrollPosition from "../../utils/useScrollPosition";
import Discord from '../illustrations/discord';
import Github from '../illustrations/github';
import Youtube from '../illustrations/youtube';
import { Nav, NavHamburger, NavLinks, NavLogo, NavWrapper } from './Nav.styled';

const drawerWidth = 240;
const navItems = [
  {
    title: 'Homepage',
    url: "/"
  },
  {
    title: 'Docs',
    url: "/about"
  },
  {
    title: 'Discord',
    url: "/"
  }
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(null)
  const [offsetTopNav, setOffsetTopNav] = useState('0px')
  const [scrollPosLast, setScrollPosLast] = useState()
  const navRef = useRef(null)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setNavHeight(navRef.current.offsetHeight)
    setScrollPosLast(scrollPosition)
  }, []);

  useEffect(() => {
    if (navRef?.current?.style?.top === '') {
      navRef.current.style.top = '0px';
    }
    if (scrollPosition < scrollPosLast) {
      setOffsetTopNav('0px');
    } else if (scrollPosition > scrollPosLast) {
      let offsetTop = navRef?.current?.style?.top;
      offsetTop = parseInt(offsetTop.substring(0, offsetTop.length - 2)) - 1
      offsetTop += 'px'
      setOffsetTopNav(`${parseInt(navRef?.current?.style?.top?.substring(0, navRef?.current?.style.top?.length - 2)) - 2}px`)
    }

    setScrollPosLast(scrollPosition)
  }, [scrollPosition]);

  const container = globalThis?.window !== undefined ? () => window().document.body : undefined;

  // const navLinks = navItems.map((item, index) => (
  //   <NavLink key={`nav-link-${index}`}>
  //     <Link target="_blankh className="ref={'/'} color={'text'}>{item.title}</Link>
  //   </NavLink>
  // ))

  return (
    <NavWrapper>
      <Nav
        ref={navRef}
        offsetTopNav={offsetTopNav === null ? '0px' : offsetTopNav}
        css={{
        }}
      >
        <NavLogo>
          <Text
            size={36}
            css={{
              textGradient: "0deg, #1d3f66 -20%, #d41bc1 50%",
              [`@media (${viewports.minXxs})`]: {
                fontSize: '50px',
              },
            }}
            weight="bold">Mycelium</Text>
        </NavLogo>
        <NavLinks>
          <Link target="_blank" className="nav-links__link" href="https://discord.gg/vdT2pUGE" css={{
            background: colors.gradient, // linear-gradient(90deg, rgb(5 3 72 / 40%) 0%, rgb(112 9 121 / 50%) 64%, rgb(152 244 246 / 50%) 100%) transparent
          }} variant="contained" size="md" sx={{
            borderRadius: '32px',
          }}>
            <Tooltip content={"Join our Discord Server"}>
              <Discord fillcolor={"#4F5152"} />
            </Tooltip>
          </Link>
          <Link target="_blank" className="nav-links__link" href='https://youtu.be/9dMH8vjcVHM' css={{
            background: colors.gradient, // linear-gradient(90deg, rgb(5 3 72 / 40%) 0%, rgb(112 9 121 / 50%) 64%, rgb(152 244 246 / 50%) 100%) transparent
          }} variant="contained" size="md">
            <Tooltip content={"Watch our Youtube Video"}>
              <Youtube fillcolor={"#4F5152"} />
            </Tooltip>
          </Link>
          <Link target="_blank" className="nav-links__link" href="https://github.com/spctcl/mycelium" css={{
            background: colors.gradient, // linear-gradient(90deg, rgb(5 3 72 / 40%) 0%, rgb(112 9 121 / 50%) 64%, rgb(152 244 246 / 50%) 100%) transparent
          }} variant="contained" size="md">
            <Tooltip content={"See our Codebase"}>
              <Github fillcolor={"#4F5152"} />
            </Tooltip>
          </Link>
        </NavLinks>
        <NavHamburger mobileOpen={mobileOpen} onClick={handleDrawerToggle} />

        {!!mobileOpen && <Modal
          closeButton
          aria-labelledby="modal-title"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          fullScreen={true}
        >
          <Modal.Header>
            <Text size={fontSizes.xl2}>Navigation</Text>
          </Modal.Header>
          <Modal.Body>
            {navLinks}
          </Modal.Body>
        </Modal>
        }
      </ Nav >
    </NavWrapper>
  );
}
