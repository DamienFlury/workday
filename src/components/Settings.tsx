import React, { useContext } from 'react';
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
import { ThemeTypeContext, ThemeType } from '../providers/ThemeTypeProvider';
import { ForegroundContext, Foreground } from '../providers/ForegroundProvider';
import { BackgroundContext, Background } from '../providers/BackgroundProvider';
import { StoreState } from '../store';
import { TimeFormat } from '../store/time-format/time-format-types';
import { setTimeFormat } from '../store/time-format/time-format-actions';

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
  const { themeType, setThemeType } = useContext(ThemeTypeContext);
  const timeFormat = useSelector(
    (state: StoreState) => state.timeFormat.format
  );
  const dispatch = useDispatch();
  const { foreground, setForeground } = useContext(ForegroundContext);
  const { background, setBackground } = useContext(BackgroundContext);

  return (
    <StyledPaper>
      <Typography variant="h4">Settings</Typography>
      <Wrapper>
        <StyledFormControl>
          <InputLabel>Theme</InputLabel>
          <Select
            value={themeType}
            onChange={(e) => {
              setThemeType(e.target.value as ThemeType);
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
              dispatch(setTimeFormat(e.target.value as TimeFormat));
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
              setBackground(e.target.value as Background);
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
              setForeground(e.target.value as Foreground);
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
