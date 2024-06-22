import React, { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTargetStatus, deleteTarget } from '../store/targetSlice';
import { useDrag } from 'react-dnd';
import EditTargetDialog from './EditTargetDialog';

const getStatusColor = (status) => {
  switch (status) {
    case 'not started':
      return 'rgba(255, 99, 132, 0.3)';
    case 'in progress':
      return 'rgba(75, 192, 192, 0.3)';
    case 'completed':
      return 'rgba(54, 162, 235, 0.3)';
    default:
      return 'white';
  }
};

const TargetBox = ({ target }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TARGET',
    item: { id: target.id, status: target.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleStatusChange = (status) => {
    dispatch(updateTargetStatus({ id: target.id, status }));
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteTarget({ id: target.id }));
  };

  return (
    <Box
      ref={drag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: getStatusColor(target.status),
        padding: 2,
        margin: 1,
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Typography>{target.name}</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Change Status</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleStatusChange('not started')}>Not Started</MenuItem>
          <MenuItem onClick={() => handleStatusChange('in progress')}>In Progress</MenuItem>
          <MenuItem onClick={() => handleStatusChange('completed')}>Completed</MenuItem>
        </Menu>
        <Box>
          <Button onClick={() => setEditDialogOpen(true)}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Box>
      </Box>
      <EditTargetDialog
        open={isEditDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        target={target}
      />
    </Box>
  );
};

export default TargetBox;
