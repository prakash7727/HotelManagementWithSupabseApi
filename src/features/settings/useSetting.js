import { getSettings } from "../../services/apiSettings";
import { useQuery} from "@tanstack/react-query";
export function useSetting(){
      const { isLoading, error, data: setting} = useQuery({
            queryKey: ["settings"],
            queryFn: getSettings,
      })
      return { isLoading, error,setting}
}