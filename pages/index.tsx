import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: 'planets', query: { page: 1 } });
  }, []);

  return null;
};

export default Home;
