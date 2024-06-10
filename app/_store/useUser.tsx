import useSWR from "swr"

export default function useUser (id : string) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
   
    return {
      user: data,
      isLoading,
      isError: error
    }
  }