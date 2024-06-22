import React from 'react';
import { useDrop } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import TargetBox from './TargetBox';
import { useDispatch } from 'react-redux';
import { updateTargetStatus } from '../store/targetSlice';

const TargetColumn = ({ status, targets }) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop(() => ({
    accept: 'TARGET',
    drop: (item) => {
      dispatch(updateTargetStatus({ id: item.id, status }));
    },
  }));

  return (
    <Box
      ref={drop}
      sx={{
        width: '30%',
        minHeight: '400px',
        padding: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Typography variant="h6" gutterBottom>{status}</Typography>
      {targets.map((target) => (
        <TargetBox key={target.id} target={target} />
      ))}
    </Box>
  );
};

export default TargetColumn;
