import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ProtectedRouter";
import GlobalStyle from "./styles/GLobalStyles";
import { DarkModeProvider } from "./context/DarkModecontext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<NewUsers />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}
export default App;

// import styled from "styled-components";
// import GlobalStyle from "./GLobalStyles";
// import Button from "./ui/Button";
// import Heading from "./ui/Heading";
// import Input from "./ui/Input";
// import Row from "./ui/Row";

// const StyledApp = styled.main`
//   // background-color: orange;
//   padding: 20px;
// `;
// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <StyledApp>
//         <Row type="vertical">
//           <Row type="horizontal">
//             <Heading as="h1">JAY HANUMAN</Heading>
//             <div>
//               <Heading as="h2">check in out</Heading>
//               <Button onClick={() => alert("okkk")}>Check in</Button>
//               <Button variation="secondary" size="small" onClick={() => alert("okkk")}>Check out</Button>
//             </div>
//           </Row>
//           <Row type="vertical">
//             <Heading as="h2">Form</Heading>
//             <form>
//               <Input type="text" placeholder="write here..."></Input>
//               <Input type="text" placeholder="write here..."></Input>
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
