import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  Button,
  Box,
} from '@material-ui/core';
import React from 'react';
import PatternIcon from '@/assets/icons/Pattern';
import { CloseIcon } from '@layer5/sistent-svg';
import { GetApp as GetAppIcon } from '@material-ui/icons';
import OriginalApplicationFileIcon from '@/assets/icons/OriginalApplicationIcon';
import ModifiedApplicationFileIcon from '@/assets/icons/ModifiedApplicationIcon';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  dialogTitle: {
    backgroundColor: theme.palette.secondary.mainBackground,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 20px',
    gap: '146px',
    color: '#FFFFFF',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    '& h2': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  text: {
    fontFamily: 'Qanelas Soft, sans-serif',
    '&.MuiTypography-root': {
      fontFamily: 'Qanelas Soft, sans-serif',
    },
  },
  textHeader: {
    fontFamily: 'Qanelas Soft, sans-serif',
    textAlign: 'center',
  },
  closing: {
    transform: 'rotate(-90deg)',
    '&:hover': {
      transform: 'rotate(90deg)',
      transition: 'all .3s ease-in',
      cursor: 'pointer',
    },
  },
});

const ExportModal = (props) => {
  const {
    downloadModal,
    handleDownloadDialogClose,
    handleDesignDownload,
    classes,
    extensibleButtons,
  } = props;
  console.log(extensibleButtons);

  const handleClose = () => {
    handleDownloadDialogClose();
  };

  const exportBtnStyles = {
    boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  };

  const exportWrpStyles = {
    width: '8rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Dialog
      open={downloadModal.open}
      onClose={handleClose}
      aria-labelledby="download-design-dialog"
      aria-describedby="download-design-dialog-description"
      maxWidth="xl"
    >
      <DialogTitle
        textAlign="center"
        id="download-design-dialog-title"
        className={classes.dialogTitle}
      >
        <PatternIcon width={30} height={30} style={{ filter: 'none', opacity: 1 }} fill="#FFF" />
        <Typography className={classes.textHeader} variant="h6">
          Export Design
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          component="button"
          style={{
            color: '#FFFFFF',
          }}
        >
          <CloseIcon className={classes.closing} fill={'#FFF'} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3.5rem',
          maxWidth: '688px',
          padding: '5rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '2.5rem',
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {downloadModal?.content?.type?.String && (
            <div
            // className={classes.exportBtns}
            >
              <Typography
                component={'h4'}
                style={{ paddingBottom: '1.5rem' }}
                className={classes.text}
              >
                Original ({downloadModal?.content?.type?.String})
              </Typography>
              <div style={exportBtnStyles}>
                <Button onClick={(e) => handleDesignDownload(e, downloadModal.content, false)}>
                  <div style={exportWrpStyles}>
                    <OriginalApplicationFileIcon width={75} height={75} />
                    <div style={{ display: 'flex', padding: '0.8rem' }}>
                      <Typography> EXPORT </Typography>
                      <GetAppIcon />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          )}
          <div>
            <Typography component="p" style={{ paddingBottom: '1.5rem' }} className={classes.text}>
              Current
            </Typography>
            <div style={exportBtnStyles}>
              <Button onClick={(e) => handleDesignDownload(e, downloadModal.content, false)}>
                <div style={exportWrpStyles}>
                  <ModifiedApplicationFileIcon width={75} height={82} />
                  <div style={{ display: 'flex', padding: '0.4rem' }}>
                    <Typography> EXPORT </Typography>
                    <GetAppIcon />
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div>
            <Typography style={{ paddingBottom: '1.5rem' }} className={classes.text}>
              OCI
            </Typography>

            <div style={exportBtnStyles}>
              <Button onClick={(e) => handleDesignDownload(e, downloadModal.content, true)}>
                <div style={exportWrpStyles}>
                  <ModifiedApplicationFileIcon width={75} height={82} />
                  <div style={{ display: 'flex', padding: '0.4rem' }}>
                    <Typography> EXPORT </Typography>
                    <GetAppIcon />
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <>
            {extensibleButtons?.map((btn, idx) => (
              <div key={idx}>{btn(props)}</div>
            ))}
          </>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(ExportModal);
