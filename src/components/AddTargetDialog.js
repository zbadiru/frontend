import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTarget } from '../store/targetSlice';

const AddTargetDialog = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAddTarget = () => {
    if (name.trim()) {
      dispatch(addTarget({ id: Date.now(), name, status: 'not started' }));
      setName('');
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTarget();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Target</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Target Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddTarget} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTargetDialog;
