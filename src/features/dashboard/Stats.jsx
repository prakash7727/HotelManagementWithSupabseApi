/* eslint-disable react/prop-types */
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({bookings, confirmedStays,}){
   
      const numBookings = bookings.length;

      const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
   
      const checkin = confirmedStays.length;

      const occuption = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0)
      

      return(
            <>
            <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase/>} value={numBookings}/>
            <Stat title="Sales" color="green" icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)}/>
            <Stat title="Check in" color="indigo" icon={<HiOutlineCalendarDays/>} value={checkin}/>
            <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar/>} value={occuption}/>
            </>
      )
}
export default Stats;