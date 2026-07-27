import { getUser } from "@/api/generated";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {

    return useQuery({
        queryKey: ["me"],
        queryFn: getUser,
        retry: false
    });

}