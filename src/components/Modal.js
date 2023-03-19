import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from "../App.module.scss";

export const Modal = ({ open, handleClose, onConfirm }) => {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 500,
            paddingBottom: 2,
            paddingRight: 2
          }
        }}
      >
        <DialogTitle className={styles.dialogTitle}>
          <div className={styles.warningIcon}>
            <img
              src="/assets/icons/warning-icon.svg"
              width="18px"
              height="18px"
              alt="Warning"
            />
          </div>
          <p className={styles.dialogTitle}>Unclosed Overdue Pay Runs</p>
        </DialogTitle>
        <DialogContent>
          <img
            className={styles.crossIcon}
            src="/assets/icons/cross-icon.svg"
            width="11px"
            height="11px"
            alt="Close Modal"
            onClick={handleClose}
          />
          <p className={styles.modalDescription}>
            Would you like to skip unclosed periods and start with this pay run <span>(January 2023)?</span>
          </p>
        </DialogContent>
        <DialogActions>
          <button variant="outlined" className={styles.backBtn} onClick={handleClose}>Back</button>
          <button className={styles.skipUnclosedPeriodsBtn} onClick={onConfirm}>
            Skip Unclosed Periods
          </button>
        </DialogActions>
      </Dialog>
  );
};
