import React, { useState } from 'react';
import {
  Paper, Typography, Select, MenuItem, FormControl, InputLabel, Button, Box,
} from '@material-ui/core';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { saveSettings } from '../store/actions/settings-actions';

const StyledPaper = styled(Paper)`
  padding: 40px;
  margin: 20px;
`;
const StyledForm = styled.form`
  margin-top: 20px;
`;

const StyledFormControl = styled(FormControl)`
  width: 200px;
`;

const Settings = () => {
  const type = useSelector(state => state.settings.theme.type);
  const currentTimeFormat = useSelector(state => state.settings.timeFormat);
  const [theme, setTheme] = useState({
    type,
  });
  const [timeFormat, setTimeFormat] = useState(currentTimeFormat);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveSettings({ theme, timeFormat }));
  };

  return (
    <StyledPaper>
      <Typography variant="h4">Settings</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormControl>
          <InputLabel>Theme</InputLabel>
          <Select
            value={theme.type}
            onChange={e => setTheme(prev => ({ ...prev, type: e.target.value }))}
          >
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel>Time format</InputLabel>
          <Select
            value={timeFormat}
            onChange={e => setTimeFormat(e.target.value)}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="24h">24h</MenuItem>
            <MenuItem value="ampm">AM/PM</MenuItem>
          </Select>
        </StyledFormControl>
        <Box marginTop="20px">
          <Button type="submit" variant="contained">Save</Button>
        </Box>
      </StyledForm>
    </StyledPaper>
  );
};

export default Settings;
