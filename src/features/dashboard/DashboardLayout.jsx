
import styled from "styled-components";
import TodayActivity from "../check-in-out/TodayActivity";
import { useRecentBooking } from "./useRecentBooking";
import { useRecentStats } from "./useRecentStats";
import Spinner from "../../ui/Spinner";
import { useCabins } from "../cabins/useCabin";
import Stats from "./Stats";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout(){
  const {isLoading, bookings} = useRecentBooking();
  
  const {stays,isLoading:isLoading2,  confirmedStays, numDays, } = useRecentStats();
  
  const { cabins, isLoading: isLoading3} = useCabins();

  if(isLoading || isLoading2 || isLoading3 ) return <Spinner/>;

  return(
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} cabinCount={cabins.length} numDays={numDays}/>
      <TodayActivity stays={stays}/>
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  
  
  )
}
export default DashboardLayout;
