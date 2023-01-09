import React, { useState } from "react";
import "./Navbar.css";
import MidbarList from "./MidbarList";
import { GrLinkTop } from "react-icons/gr";
import { Link } from "react-router-dom";
import {HiMenu} from 'react-icons/hi'
import {BiSearchAlt} from 'react-icons/bi'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Search from "./Search";

const Midbar = ({ filters, changeFilters }) => {
  const [searchToggle,setSearchToggle] = useState(false);
  return (
    <div className="midBar">
      <div>
        <div className='hamburgerMenu'>
        <Menu >
          <MenuButton as={Button} background='none' colorScheme={'white'}>
          <HiMenu size={'1.7rem'} color='black'/>
          </MenuButton>
          <MenuList>
            <MenuItem><Link to={'/products'}>All Styles</Link></MenuItem>
            <MenuItem><Link to={'/products'}>tokps</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Dress</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Co-ords</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Basics</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Skirts</Link></MenuItem>
            <MenuItem><Link to={'/products'}>Bottom</Link></MenuItem>
          </MenuList>
        </Menu>
        </div>
        <Link to={"/"}>
          <img
            style={{ width: "150px" }}
            src="https://static.faballey.com/images/logo.png?v=11.38"
            alt=""
          />
        </Link>
      </div>
      <div>
        <MidbarList filters={filters} changeFilters={changeFilters} />
      </div>
      <div style={{ display: "flex" }}>
        {searchToggle?<div style={{position:'relative'}}>
          <Search setSearchToggle={setSearchToggle}/>
        </div>:''}
        <BiSearchAlt cursor={'pointer'} onClick={()=>setSearchToggle((prev)=>!prev)} size={'1.6rem'}/>
        <select
          name=""
          id="corancy"
          style={{
            border: ".5px solid grey",
            fontSize: "12px",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          <option value="inr">₹ INR</option>
          <option value="usd">$ USD</option>
          <option value="cad">$ CAD</option>
          <option value="aud">$ AUD</option>
          <option value="sgd">$ SGD</option>
        </select>
      </div>
    </div>
  );
};

export default Midbar;
