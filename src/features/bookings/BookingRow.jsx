/* eslint-disable react/prop-types */
import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckedout";
import { useDeleteBoooking } from "./useDelete";
import Model from "../../ui/Model-1";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  bookings: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests,
    cabins,
  },
}) {
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBoooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const guestName = guests?.fullName || "Unknown";
  const email = guests?.email || "Unknown";
  const cabinName = cabins?.name || "Unknown";

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Model>
      <Menus.Menu>
        <Menus.Toggle id={bookingId}></Menus.Toggle>
        <Menus.List id={bookingId}>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            See details...
          </Menus.Button>
          {status === "unconfirmed" && (
            <>
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            </>
          )}
          {status === "checked-in" && (
            <>
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            </>
          )}
          <Model.Open opens="delete">
            <Menus.Button icon={<HiTrash />}>Delete..</Menus.Button>
          </Model.Open>
        </Menus.List>
      </Menus.Menu>
      <Model.Window name="delete">
        <ConfirmDelete
          resourceName="bookings"
          onConfirm={() => deleteBooking(bookingId)}
          disabled={isDeleting}
        ></ConfirmDelete>
      </Model.Window>
      </Model>
    </Table.Row>
  );
}

export default BookingRow;
// import styled from "styled-components";
// import { format, isToday } from "date-fns";

// import Tag from "../../ui/Tag";
// import Table from "../../ui/Table";

// import { formatCurrency } from "../../utils/helpers";
// import { formatDistanceFromNow } from "../../utils/helpers";
// import Menus from "../../ui/Menus";
// import { HiEye } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const Stacked = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.2rem;

//   & span:first-child {
//     font-weight: 500;
//   }

//   & span:last-child {
//     color: var(--color-grey-500);
//     font-size: 1.2rem;
//   }
// `;

// const Amount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
// `;

// function BookingRow({
//   bookings: {
//     id: bookingId,
//     //created_at,
//     startDate,
//     endDate,
//     numNights,
//     //numGuests,
//     totalPrice,
//     status,
//     guests,
//     cabins,
//   },
// }) {
//   const navigate = useNavigate();

//   const statusToTagName = {
//     unconfirmed: "blue",
//     "checked-in": "green",
//     "checked-out": "silver",
//   };
//   const guestName = guests?.fullName || "Unknown";
//   const email = guests?.email || "Unknown";
//   const cabinName = cabins?.name || "Unknown";

//   return (
//     <Table.Row>
//       <Cabin>{cabinName}</Cabin>

//       <Stacked>
//         <span>{guestName}</span>
//         <span>{email}</span>
//       </Stacked>

//       <Stacked>
//         <span>
//           {isToday(new Date(startDate))
//             ? "Today"
//             : formatDistanceFromNow(startDate)}{" "}
//           &rarr; {numNights} night stay
//         </span>
//         <span>
//           {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
//           {format(new Date(endDate), "MMM dd yyyy")}
//         </span>
//       </Stacked>

//       <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

//       <Amount>{formatCurrency(totalPrice)}</Amount>
//         <Menus.Menu>
//           <Menus.Toggle id={bookingId}>
//             <Menus.List id={bookingId}>
//               <Menus.Button icon={<HiEye />} onClick={() => navigate(`/bookings/${bookingId}`)}>See details...</Menus.Button>
//             </Menus.List>
//           </Menus.Toggle>
//         </Menus.Menu>
//     </Table.Row>
//   );
// }

// export default BookingRow;
