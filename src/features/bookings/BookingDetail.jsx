import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { UseBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckedout";
import Model from "../../ui/Model-1";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBoooking } from "./useDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = UseBookings();
  const { checkout, isCheckingOut} = useCheckout();
  const { isDeleting,deleteBooking} = useDeleteBoooking();
  // const status = "checked-in";

  const moveBack = useMoveBack();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;

  
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <>
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              Check in
            </Button>
          </>
        )}
         {status === "checked-in" && (
            <>
              <Button
                icon={<HiArrowUpOnSquare/>}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Button>
            </>
          )}
          <Model>
          <Model.Open opens="delete">
            <Button variation="danger">Delete..</Button>
          </Model.Open>
      <Model.Window name="delete">
        <ConfirmDelete
          resourceName="bookings"
          onConfirm={() => deleteBooking(bookingId, {onSettled: () => navigate(-1)})}
          disabled={isDeleting}
        ></ConfirmDelete>
      </Model.Window>
      </Model>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
