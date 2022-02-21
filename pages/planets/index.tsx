import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import PlanetsShowcase from 'components/Planets';
import Meta from 'components/Meta';
import Pagination from 'components/Pagination';

import { getPlanets } from 'services/Planets';

import { Planets } from 'types/planets';

const PlanetsPage: React.FC = () => {
  const router = useRouter();

  const currentPageNumber = Number(router?.query?.page);

  const { data, isLoading } = useQuery<Planets>(
    [`planets`, { currentPage: currentPageNumber }],
    () => getPlanets(currentPageNumber),
    {
      enabled: !!currentPageNumber,
      onError: () => router.push({ query: { page: 1 } }),
      retry: false,
    },
  );

  const setCurrentPage = (page: number) => router.push({ query: { page } });

  return (
    <>
      <Meta title="Planets" />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <PlanetsShowcase planets={data} />
          <Pagination
            hasPreviousPage={!!data?.previous}
            hasNextPage={!!data?.next}
            currentPage={currentPageNumber}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default PlanetsPage;
