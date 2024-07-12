import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


export function useEditCabin(){
const queryClient = useQueryClient();

const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
      onSuccess: () => {
        toast.success("cabin edited successfully");
        queryClient.invalidateQueries({
          queryKey: ["cabin"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
    return {editCabin, isEditing}
}