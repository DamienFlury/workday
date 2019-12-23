import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { StoreState } from '../store/store';

const useFormatter = () => {
  const timeFormat: string = useSelector((state: StoreState) => state.settings.timeFormat);

  const formatTime = (date: Date) => {
    switch (timeFormat) {
      case 'ampm':
        return format(date, 'h:mm A');
      case '24h':
        return format(date, 'HH:mm');
      default:
        return format(date, 'p');
    }
  };

  return { formatTime };
};


export default useFormatter;
