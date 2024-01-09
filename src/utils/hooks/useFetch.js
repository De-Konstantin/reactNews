import { useEffect, useState } from 'react';

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   const stringParams = params ? new URLSearchParams(params).toString() : '';
  const stringParams = params && new URLSearchParams(params).toString();

  useEffect(() => {
    //  let isMounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
        //   console.log('ok finally');
      }
    })();
    //  return () => {
    //    isMounted = false;
    //  };
  }, [fetchFunction, stringParams]);
  return { data, isLoading, error };
};
