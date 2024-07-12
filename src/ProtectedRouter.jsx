/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "./features/authentication/useUser";
import Spinner from "./ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();
  //2. no auth user rediret /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  
  //3.while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. if therer is user , render the page

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
