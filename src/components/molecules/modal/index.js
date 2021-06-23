import React from "react";
import { Modal as MaterialModal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FadeContent from "../../molecules/modal/FadeContent";
import { connect } from "react-redux";
import { closeCartModal } from "../../../Redux/Acions";
import { useStylesModal } from "./StyledModal";

const Modal = ({ isCartModalOpen, closeCartModal }) => {
  const classes = useStylesModal();
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
