import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import logout from "../assets/images/logout.png";
import star from "../assets/clint.png";

const style = {
  position: "absolute",
  top: "34%",
  left: "79%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "300px",
  bgcolor: "#D8E4F0",
  borderRadius: "30px",
  padding: "40px",
};

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Avatar
        onClick={handleOpen}
        sx={{
          position: "fixed",
          left: "92%",
          top: "2.5%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
        src={star}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ textAlign: "center", fontSize: "21px" }}>
            yeakub@prayersconnect.com
          </Typography>
          <Avatar
            src={star}
            sx={{
              marginLeft: "155px",
              width: "100px",
              height: "100px",
              marginTop: "15px",
            }}
          />
          <Typography sx={{ textAlign: "center", fontSize: "26px" }}>
            Hi, Yeakub
          </Typography>
          <button
            style={{
              cursor: "pointer",
              border: "1px solid white",
              borderRadius: "40px",
              marginTop: "38px",
              fontSize: "18px",
              width: "200px",
              height: "60px",
              marginLeft: "110px",
            }}
          >
            <img src={logout} style={{ width: "15px" }} />
            Signout
          </button>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "100",
              textAlign: "center",
              marginTop: "19px",
            }}
          >
            Privacy Policy Terms of Service
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
