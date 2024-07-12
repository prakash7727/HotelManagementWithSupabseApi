import { useQuery } from "@tanstack/react-query";
import { getCurrenrUser } from "../../services/apiAuth";

export function useUser(){
      const { isLoading, data: user} = useQuery({
            queryKey: ["user"],
            queryFn: getCurrenrUser,
      });
      return {isLoading, user, isAuthenticated: user?.role === "authenticated"};
}