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

const Settings = () => {
  const type = useSelector(state => state.settings.theme.type);
  const [theme, setTheme] = useState({
    type,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveSettings({ theme }));
  };

  return (
    <StyledPaper>
      <Typography variant="h4">Settings</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>Theme</InputLabel>
          <Select
            value={theme.type}
            onChange={e => setTheme(prev => ({ ...prev, type: e.target.value }))}
          >
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
          </Select>
          <Box marginTop="20px">
            <Button type="submit" variant="contained">Save</Button>
          </Box>
        </FormControl>
      </StyledForm>
    </StyledPaper>
  );
};

export default Settings;
