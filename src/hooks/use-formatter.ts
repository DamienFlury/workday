import { format } from 'date-fns';
import { useContext } from 'react';
import { TimeFormatContext } from '../providers/TimeFormatProvider';

const useFormatter = () => {
  const { timeFormat } = useContext(TimeFormatContext);

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
