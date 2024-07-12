import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateCabin(){
const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin craeted successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin}
}