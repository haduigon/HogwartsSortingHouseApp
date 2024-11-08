import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AppProps } from "@/helpres/types";

const useGetCustomQuery = () => {
  const queryClient = useQueryClient();

  return function (propertyName: AppProps) {
    const result = useQuery<unknown>({
      queryKey: [propertyName],
      enabled: false,
      initialData: () => queryClient.getQueryData<unknown>([propertyName]),
    });

    return result.data;
  };
};

export default useGetCustomQuery;
