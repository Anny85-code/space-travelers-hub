import './MissionItems.css';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission, joinMission } from '../../redux/missions/missions';

const MissionItems = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className="li-content">
      <div className="content name">{name}</div>
      <div className="content des">{description}</div>
      <div className="content status center-container">
        {reserved ? (
          <button type="button" className="btn1">
            NOT A MEMBER
          </button>
        ) : (
          <button type="button" className="active-btn">
            Active Member
          </button>
        )}
      </div>
      <div className="content join center-container">
        {!reserved ? (
          <button
            type="button"
            className="btn2"
            onClick={() => dispatch(joinMission(id))}
          >
            Join Mission
          </button>
        ) : (
          <button
            type="button"
            className="leave-btn"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        )}
      </div>
    </li>
  );
};
MissionItems.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default MissionItems;
