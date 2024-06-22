import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import AddTargetDialog from '../components/AddTargetDialog';
import TargetColumn from '../components/TargetColumn';
import { selectTargetsByStatus } from '../store/targetSlice';

const Home = () => {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const notStartedTargets = useSelector((state) => selectTargetsByStatus(state, 'not started'));
  const inProgressTargets = useSelector((state) => selectTargetsByStatus(state, 'in progress'));
  const completedTargets = useSelector((state) => selectTargetsByStatus(state, 'completed'));

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Targetometer</Typography>
        <Button onClick={() => setAddDialogOpen(true)} color="primary" variant="contained">Add Target</Button>
      </Box>
      <AddTargetDialog
        open={isAddDialogOpen}
        onClose={() => setAddDialogOpen(false)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <TargetColumn status="not started" targets={notStartedTargets} />
        <TargetColumn status="in progress" targets={inProgressTargets} />
        <TargetColumn status="completed" targets={completedTargets} />
      </Box>
    </Box>
  );
};

export default Home;
