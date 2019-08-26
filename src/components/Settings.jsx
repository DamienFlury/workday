import React from 'react';
import {
  Paper, Typography, Select, MenuItem, FormControl, InputLabel,
} from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { saveSettings } from '../store/actions/settings-actions';

const StyledPaper = styled(Paper)`
  padding: 40px;
  margin: 20px;
`;
const Wrapper = styled.div`
  margin-top: 20px;
`;

const StyledFormControl = styled(FormControl)`
  width: 200px;
`;

const Settings = () => {
  const type = useSelector(state => state.settings.theme.type);
  const timeFormat = useSelector(state => state.settings.timeFormat);
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
              dispatch(saveSettings({ theme: { type: e.target.value }, timeFormat }));
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
              dispatch(saveSettings({ theme: { type }, timeFormat: e.target.value }));
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="24h">24h</MenuItem>
            <MenuItem value="ampm">AM/PM</MenuItem>
          </Select>
        </StyledFormControl>
      </Wrapper>
    </StyledPaper>
  );
};

export default Settings;
