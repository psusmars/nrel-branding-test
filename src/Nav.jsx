import { Header, Menu, MenuLink, SubMenu } from 'nrel-branding-react';

function Nav() {
  return(
    <Header
      appTitle="NSRDB: National Solar Radiation Database"
      hasMobileNav
      
    >
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <SubMenu label="About">
          <MenuLink to="/about/what-is-the-nsrdb">What is the NSRDB?</MenuLink>
          <MenuLink to="/about/what-is-the-nsrdb">Announ</MenuLink>
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
