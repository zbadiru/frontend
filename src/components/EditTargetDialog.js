import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editTarget } from '../store/targetSlice';

const EditTargetDialog = ({ open, onClose, target }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (target) {
      setName(target.name);
      setStatus(target.status);
    }
  }, [target]);

  const handleSave = () => {
    dispatch(editTarget({ id: target.id, name, status }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Target</DialogTitle>
      <DialogContent>
        <TextField
          label="Target Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Status"
          select
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          margin="normal"
        >
          <MenuItem value="not started">Not Started</MenuItem>
          <MenuItem value="in progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTargetDialog;
