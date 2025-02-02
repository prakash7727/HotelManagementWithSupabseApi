import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const Navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({bookingId, breakfast}) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`booking # ${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      Navigate("/");
    },
    onError: () => toast.error("There was an erroe while checking in"),
  });
  return { checkin, isCheckingIn };
}
