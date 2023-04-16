import { useState, useEffect } from "react";
//import s from './style.scss'
import '../App.css'
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router, NavLink
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#theloai" className={activeLink === 'theloai' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('theloai')}>Thể loại</Nav.Link>
              <Nav.Link href="#suthi" className={activeLink === 'suthi' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('suthi')}>Sử thi</Nav.Link>
              <Nav.Link href="#truyenthuyet" className={activeLink === 'truyenthuyet' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('truyenthuyet')}>Truyền thuyết</Nav.Link>
              <Nav.Link href="#ngungon" className={activeLink === 'ngungon' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ngungon')}>Ngụ ngôn</Nav.Link>
              <Nav.Link href="#cotich" className={activeLink === 'cotich' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cotich')}>Cổ tích</Nav.Link>

            </Nav>
            <NavLink to="/manager">QL Truyện</NavLink>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
