import { Planet } from 'types/planets';

export type PlanetDetailsProps = {
  planetDetails?: Planet;
};

const PlanetDetails: React.FC<PlanetDetailsProps> = ({ planetDetails }) => {
  return (
    <div className="max-w-xl mx-auto bg-blue-100 px-12 py-2">
      <div className="flex justify-between">
        <p>Name</p>
        <p>{planetDetails?.name}</p>
      </div>
      <div className="flex justify-between">
        <p>Diameter</p>
        <p>{planetDetails?.diameter}</p>
      </div>
      <div className="flex justify-between">
        <p>Terrain</p>
        <p>{planetDetails?.terrain}</p>
      </div>
    </div>
  );
};

export default PlanetDetails;
