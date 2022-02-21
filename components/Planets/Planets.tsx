import { useRouter } from 'next/router';

import { Planets } from 'types/planets';

export type PlanetsProps = {
  planets?: Planets;
};

const Planets: React.FC<PlanetsProps> = ({ planets }) => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="justify-center grid grid-cols-auto-fit gap-2">
        {planets?.results?.map((planet) => {
          const planetArray = planet?.url?.split('/');
          return (
            <div
              onClick={() =>
                router.push({
                  pathname: `/planets/${planetArray[planetArray.length - 2]}`,
                })
              }
              key={planet.url}
              className="text-center cursor-pointer bg-blue-100 p-8"
            >
              <p>{planet.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planets;
