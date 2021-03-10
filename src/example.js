import React, { useState } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
 } from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Carlos' Example Page</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/carjmarq/">LinkedIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/carmarq/rstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
    );
  }

export default Example;