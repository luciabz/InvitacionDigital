import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const eventDate = new Date('2025-06-28T20:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) =>
    completed ? (
      <span>¡Es hora de celebrar!</span>
    ) : (
      <span>{days}d {hours}h {minutes}m {seconds}s</span>
    );

  return<Countdown date={eventDate} renderer={renderer} />;
};

export default CountdownTimer;
