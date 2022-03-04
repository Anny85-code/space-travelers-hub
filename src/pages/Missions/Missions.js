import { useSelector } from 'react-redux';
import MissionItems from '../../Components/MissionItems/MissionItems';
import './Missions.css';

const Missions = () => {
  const missionData = useSelector((state) => state.missions);

  return (
    <div className="main-container">
      <div className="table-container">
        <ul className="ul-container">
          <div className="header-container">
            <h3 className="h-name n">Mission</h3>
            <h3 className="h-des n">Description</h3>
            <h3 className="h-status n">Status</h3>
            <h3 className="h-join n">|</h3>
          </div>
          {missionData.map(
            (
              {
                id, name, description, reserved,
              },
            ) => (
              <MissionItems
                key={id}
                id={id}
                name={name}
                description={description}
                reserved={reserved}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default Missions;
