import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSide = styled.aside`
      background-color: #d3dfeb;
      padding: 3.2rem 2.4rem;
      border-right: 1px solid lightgray;
      grid-row: 1/ -1;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
`

function Sidebar(){
      return(
            <>
            <StyledSide>
                  <Logo/>
                  <MainNav/>
                  <Uploader/>
            </StyledSide>
            </>
      )
}
export default Sidebar;