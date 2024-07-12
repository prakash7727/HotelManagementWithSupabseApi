import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvtar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
      background-color: #d3dfeb;
      padding: 1.2rem 4.8rem;
      border-bottom: 1px solid var()--color-grey-100;

      display: flex;
      gap: 2.4rem;
      align-items: center;
      justify-content: flex-end;
`

function Header(){
      return(
            <>
            <StyledHeader>
                  <UserAvtar/>
                  <HeaderMenu/>
            </StyledHeader>
            </>
      )
}
export default Header;