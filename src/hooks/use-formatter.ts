import { format } from 'date-fns';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

const useFormatter = () => {
  const timeFormat = useSelector(
    (state: StoreState) => state.timeFormat.format
  );

  const formatTime = (date: Date) => {
    switch (timeFormat) {
      case 'ampm':
        return format(date, 'h:mm a');
      case '24h':
        return format(date, 'HH:mm');
      default:
        return format(date, 'p');
    }
  };

  return { formatTime };
};

export default useFormatter;
