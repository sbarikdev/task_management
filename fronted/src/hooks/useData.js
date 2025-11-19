import { CanceledError } from "axios";
import { useEffect, useState } from "react";

import client from "../services/api-client";

export const useData = (endpoint, requestConfig={}, dependencies) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const fetchData = () => {
        const controller = new AbortController();

        setIsLoading(true);
        client
          .get(endpoint, { signal: controller.signal, ...requestConfig })
          .then((res) => {
            setData(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false);
          });
        return () => controller.abort();
      };
      fetchData();
    },
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading, refetch: fetchData };
};
