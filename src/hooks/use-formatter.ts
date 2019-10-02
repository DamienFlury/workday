import { useSelector } from 'react-redux';
import { Moment } from 'moment';
import { StoreState } from '../store/store';

const useFormatter = () => {
  const timeFormat: string = useSelector((state: StoreState) => state.settings.timeFormat);

  const formatTime = (date: Moment) => {
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
