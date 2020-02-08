import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFormatter from './use-formatter';
import { TimeFormatContext } from '../providers/TimeFormatProvider';

describe('use formatter works', () => {
  it('formats 24h format correctly', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TimeFormatContext.Provider
        value={{
          timeFormat: '24h',
          setTimeFormat: () => {
            // empty for testing purposes
          },
        }}
      >
        {children}
      </TimeFormatContext.Provider>
    );

    const { result } = renderHook(() => useFormatter(), { wrapper });
    const { formatTime } = result.current;

    expect(formatTime(new Date(2020, 1, 1, 7, 20))).toBe('07:20');
  });
  it('formats 24h format correctly in the after noon', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TimeFormatContext.Provider
        value={{
          timeFormat: '24h',
          setTimeFormat: () => {
            // empty for testing purposes
          },
        }}
      >
        {children}
      </TimeFormatContext.Provider>
    );

    const { result } = renderHook(() => useFormatter(), { wrapper });
    const { formatTime } = result.current;

    expect(formatTime(new Date(2020, 1, 1, 18, 59))).toBe('18:59');
  });
  it('formats AM/PM format correctly', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TimeFormatContext.Provider
        value={{
          timeFormat: 'ampm',
          setTimeFormat: () => {
            // empty for testing purposes
          },
        }}
      >
        {children}
      </TimeFormatContext.Provider>
    );

    const { result } = renderHook(() => useFormatter(), { wrapper });
    const { formatTime } = result.current;

    expect(formatTime(new Date(2020, 1, 1, 7, 20))).toBe('7:20 AM');
  });
  it('formats AM/PM format correctly in the after noon', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TimeFormatContext.Provider
        value={{
          timeFormat: 'ampm',
          setTimeFormat: () => {
            // empty for testing purposes
          },
        }}
      >
        {children}
      </TimeFormatContext.Provider>
    );

    const { result } = renderHook(() => useFormatter(), { wrapper });
    const { formatTime } = result.current;

    expect(formatTime(new Date(2020, 1, 1, 18, 59))).toBe('6:59 PM');
  });
});
