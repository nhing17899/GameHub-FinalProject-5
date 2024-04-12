import { PropTypes } from 'prop-types';

export const WelcomeScreen = ({ name, onNameChange, onGameStart }) => {

  function onStartGameClick() {
    onGameStart();
  }

  return (
    <div id="welcome-screen">
      <form className="name-form">
        <div className="form-group">
          <label htmlFor="username">Type your name: </label>
          <input
            className="form-control name-input"
            type="text"
            id="username"
            name="username"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
            placeholder="Enter Name Here..."
            minLength="2"
            maxLength="15"
          />
        </div>
        <button
          className="btn btn-primary start-game-button"
          type="submit"
          onClick={onStartGameClick}
        >
          Start Game!
        </button>
      </form>
    </div>
  );
};
WelcomeScreen.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired
}
