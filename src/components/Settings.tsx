import React from 'react';
import {
  Typography, Select, MenuItem, FormControl, InputLabel,
} from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveSettings, ThemeType, BackgroundType,
} from '../store/actions/settings-actions';
import { StoreState } from '../store/store';
import Widget from './Widgets/Widget';

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
  const type = useSelector((state: StoreState) => state.settings.theme.type);
  const timeFormat = useSelector((state: StoreState) => state.settings.timeFormat);
  const background = useSelector((state: StoreState) => state.settings.background);
  const dispatch = useDispatch();

  return (
    <StyledPaper>
      <Typography variant="h4">Settings</Typography>
      <Wrapper>
        <StyledFormControl>
          <InputLabel>Theme</InputLabel>
          <Select
            value={type}
            onChange={(e) => {
              dispatch(saveSettings({ theme: { type: e.target.value as ThemeType }, timeFormat, background }));
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
              dispatch(saveSettings({ theme: { type }, timeFormat: e.target.value as string, background }));
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
              dispatch(saveSettings({ theme: { type }, timeFormat, background: e.target.value as BackgroundType }));
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="image">Random Image</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </StyledFormControl>
      </Wrapper>
    </StyledPaper>
  );
};

export default Settings;
