import React from 'react';
import {
  Paper, Typography, Select, MenuItem, FormControl, InputLabel, Button, Box,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 40px;
  margin: 20px;
`;
const StyledForm = styled.form`
  margin-top: 20px;
`;

const Settings = () => (
  <StyledPaper>
    <Typography variant="h4">Settings</Typography>
    <StyledForm>
      <FormControl>
        <InputLabel>Theme</InputLabel>
        <Select
          value="dark"
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

export default Settings;
