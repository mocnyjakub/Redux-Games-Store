import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal as MaterialModal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FadeContent from "../../molecules/modal/FadeContent";
import { connect } from "react-redux";
import { closeCartModal } from "../../../Redux/Acions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fade: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-evenly`,
    alignItems: "center",
    opacity: 1,
    backgroundColor: `#000`,
    border: "2px solid hsla(0, 0%, 100%, 0.16)",
    padding: theme.spacing(2, 4, 3),
    width: `60vw`,
    maxHeight: `80vh`,
    overflowY: "scroll",
  },
}));

const Modal = ({ isCartModalOpen, closeCartModal }) => {
  const classes = useStyles();
  return (
    <MaterialModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isCartModalOpen}
      onClose={closeCartModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartModalOpen}>
        <div className={classes.fade}>
          <FadeContent />
        </div>
      </Fade>
    </MaterialModal>
  );
};

const mapStateToProps = (state) => ({
  isCartModalOpen: state.isCartModalOpen,
});
const mapDispatchToProps = (dispatch) => ({
  closeCartModal: () => dispatch(closeCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
