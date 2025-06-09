import { useNavigate } from "react-router-dom";
import { HeaderWrapper, Logo, CenterNav, Nav, NavItem, RightNav } from "./Navbar.styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const isLogin = location.pathname === "/login";

    return (
        <HeaderWrapper>
            <Logo onClick={() => navigate("/")}>EQL</Logo>
            <CenterNav>
                <Nav>
                    <NavItem onClick={() => navigate("/Women")}>WOMEN</NavItem>
                    <NavItem onClick={() => navigate("/Men")}>MEN</NavItem>
                    <NavItem onClick={() => navigate("/Life")}>LIFE</NavItem>
                    <NavItem onClick={() => navigate("/Brand")}>BRAND</NavItem>
                    <NavItem onClick={() => navigate("/Eql")}>EQUL EXCLUSIVE</NavItem>
                    <NavItem $red onClick={() => navigate("/Performance")}>PERFORMANCE CLUB</NavItem>
                    <NavItem onClick={() => navigate("/Outlet")}>OUTLET</NavItem>
                    <NavItem onClick={() => navigate("/Event")}>EVENT</NavItem>
                    <NavItem onClick={() => navigate("/Discover")}>DISCOVER</NavItem>
                    <NavItem onClick={() => navigate("/Shop")}>SHOP IN SHOP</NavItem>
                </Nav>
            </CenterNav>
            <RightNav>
                <NavItem onClick={() => navigate("/login")}>로그인</NavItem>
            </RightNav>
        </HeaderWrapper>
    );
}
