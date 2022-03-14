import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import { AiFillAlipayCircle } from "react-icons/ai";
import {GiKnifeFork} from "react-icons/gi";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <AiFillAlipayCircle/>
        <Logo to={"/"}>Delicous Sii</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/></BrowserRouter>
    </div>
  );
}

export default App;


const Logo=styled(Link)`
            text-decoration:none;
            font-size:1.5rem;
            font-weight:400;
            font-family:'Lobster Two', cursive;
            `
const Nav=styled.div`
                 padding:4rem 0rem;
                 display:flex;
                 justify-content:flex-start;
                 align-item:center;
                 svg{
                   font-size:2rem;
                 }`
                 