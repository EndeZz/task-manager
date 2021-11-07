import axios from 'axios';
import { useEffect, useState } from 'react';

export type TUserProps = {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  executor: {
    id: number;
    name: string;
  };
  dateExpired: string;
  status: {
    id: number;
    name: string;
  };
};

export type TUsersProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: {
    id: number;
    name: string;
  };
};

export type TContentProps = {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  executor: {
    id: number;
    name: string;
  };
  dateExpired: string;
  status: {
    id: number;
    name: string;
  };
};

export type TTasksProps = {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  executor: {
    id: number;
    name: string;
  };
  dateExpired: string;
  status: {
    id: number;
    name: string;
  };
};

export type DataType = TUserProps[] | TUsersProps[] | TContentProps[] | TTasksProps[];

const useFetch = (url: string) => {
  const abortCont = new AbortController();
  const [data, setData] = useState<DataType | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<DataType>(url, { signal: abortCont.signal })
      .then((res) => {
        setData(res.data);
        setIsPending(false);
      })

      .catch((err) => {
        if (err.name === 'AbortError') {
          throw new Error('Fetch aborted');
        } else {
          setIsPending(false);
        }
      })
      .finally(() => {
        setIsPending(false);
      });

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return {
    data,
    isPending,
  };
};

export default useFetch;
