import useSWR from "swr"
import { commonFetcher } from "../_lib/commonFetcher"

export default function useUser (id : string) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, commonFetcher)
   
    return {
      user: data,
      isLoading,
      isError: error
    }
  }