import React from 'react';
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widgets/Widget';
import { StoreState } from '../store';
import { TimeFormat } from '../store/time-format/time-format-types';
import { ThemeType } from '../store/theme/theme-types';
import { Background } from '../store/background/background-types';
import { Foreground } from '../store/foreground/foreground-types';
import { themeSlice } from '../store/theme/theme-slices';
import timeFormatSlice from '../store/time-format/time-format-slices';
import { backgroundSlice } from '../store/background/background-slices';
import { foregroundSlice } from '../store/foreground/foreground-slice';

const StyledPaper = styled(Widget)`
  margin: 20px;
`;
const Wrapper = styled.div`
  margin-top: 20px;
`;

const StyledFormControl = styled(FormControl)`
  width: 200px;
`;

const Settings = () => {
  const themeType = useSelector((state: StoreState) => state.theme.type);
  const timeFormat = useSelector(
    (state: StoreState) => state.timeFormat.format
  );
  const dispatch = useDispatch();
  const foreground = useSelector(
    (state: StoreState) => state.foreground.foreground
  );
  const background = useSelector(
    (state: StoreState) => state.background.background
  );

  return (
    <StyledPaper>
      <Typography variant="h4">Settings</Typography>
      <Wrapper>
        <StyledFormControl>
          <InputLabel>Theme</InputLabel>
          <Select
            value={themeType}
            onChange={(e) => {
              dispatch(themeSlice.actions.set(e.target.value as ThemeType));
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Time format</InputLabel>
          <Select
            value={timeFormat}
            onChange={(e) => {
              dispatch(
                timeFormatSlice.actions.set(e.target.value as TimeFormat)
              );
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="24h">24h</MenuItem>
            <MenuItem value="ampm">AM/PM</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Background</InputLabel>
          <Select
            value={background}
            onChange={(e) => {
              dispatch(
                backgroundSlice.actions.set(e.target.value as Background)
              );
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="image">Random Image</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Foreground</InputLabel>
          <Select
            value={foreground}
            onChange={(e) => {
              dispatch(
                foregroundSlice.actions.set(e.target.value as Foreground)
              );
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="transparent">Transparent</MenuItem>
          </Select>
        </StyledFormControl>
      </Wrapper>
    </StyledPaper>
  );
};

export default Settings;
