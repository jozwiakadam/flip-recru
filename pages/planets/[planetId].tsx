import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import PlanetDetails from 'components/Planet';
import Meta from 'components/Meta';

import { getPlanet } from 'services/Planets';

import { Planet } from 'types/planets';

const PlanetPage: React.FC = () => {
  const router = useRouter();

  const planetId = Number(router?.query?.planetId);

  const { data, isLoading } = useQuery<Planet>(
    ['planet', { currentPlanet: planetId }],
    () => getPlanet(planetId),
    {
      enabled: !!planetId,
      onError: () => router.push({ pathname: '/planets', query: { page: 1 } }),
      retry: false,
    },
  );

  return (
    <>
      <Meta title="Planet" />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <button onClick={() => router.back()}>Go back</button>
          <PlanetDetails planetDetails={data} />
        </>
      )}
    </>
  );
};

export default PlanetPage;
