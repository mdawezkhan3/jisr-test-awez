import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './App.module.scss';
import { Modal } from './components';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    console.log("Skip Unclosed Periods");
  };

  return (
    <div className={styles.App}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Click Me
      </Button>
      <Modal open={open} handleClose={handleClose} onConfirm={onConfirm} />
    </div>
  );
}