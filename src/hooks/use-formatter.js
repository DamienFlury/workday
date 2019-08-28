import { useSelector } from 'react-redux';

const useFormatter = () => {
  const timeFormat = useSelector(state => state.settings.timeFormat);

  console.log(timeFormat);

  const formatTime = (date) => {
    switch (timeFormat) {
      case 'ampm':
        return date.format('h:mm A');
      case '24h':
        return date.format('HH:mm');
      default:
        return date.format('LT');
    }
  };

  return { formatTime };
};


export default useFormatter;
