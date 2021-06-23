import { makeStyles } from "@material-ui/core/styles";
export const useStylesModal = makeStyles((theme) => ({
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
