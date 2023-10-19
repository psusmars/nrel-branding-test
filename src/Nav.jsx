import { Header, Menu, MenuLink, SubMenu } from 'nrel-branding-react';

function Nav() {
  return(
    <Header
      appTitle="NSRDB: National Solar Radiation Database"
      hasMobileNav
      menuCloseDelay={100}
    >
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <SubMenu label="About">
          <MenuLink to="/about/what-is-the-nsrdb">What is the NSRDB?</MenuLink>
          <MenuLink to="/about/announcements">Announcements</MenuLink>
        </SubMenu>
        <SubMenu label="Set 2">
          <MenuLink to="/set-two/foo">Foo?</MenuLink>
          <MenuLink to="/set-two/bar">BAR?!</MenuLink>
          <SubMenu label="About">
            <MenuLink to="/foo/what-is-the-nsrdb">What is the NSRDB?</MenuLink>
            <MenuLink to="/foo/announcements#section1">Announcements</MenuLink>
          </SubMenu>
        </SubMenu>
        <MenuLink to="/data-sets">Data Sets</MenuLink>
        <MenuLink to="/resources">Resources</MenuLink>
        <MenuLink to="/data-viewer">NSRDB Viewer</MenuLink>
        <MenuLink to="/contact-us">Contact Us</MenuLink>
      </Menu>
    </Header>
  )
}
export default Nav;
