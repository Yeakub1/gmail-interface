import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <KeyboardArrowDownIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          More
        </span>
      </Box>
      <Menu
        sx={{
          boxShadow: "none",
        }}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box
          onClick={handleClose}
          sx={{
            marginTop: "19px",
            marginLeft: "10px",
            width: "212px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <img src={inbox} style={{ width: "22px", marginLeft: "32px" }} */}
          <span
            style={{
              cursor: "pointer",
              marginLeft: "27px",
              fontWeight: "400",
              fontSize: "22px",
            }}
          >
            Inbox
          </span>
        </Box>
        <Box
          onClick={handleClose}
          sx={{
            marginTop: "19px",
            marginLeft: "10px",
            width: "212px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <img src={inbox} style={{ width: "22px", marginLeft: "32px" }} */}
          <span
            style={{
              cursor: "pointer",
              marginLeft: "27px",
              fontWeight: "400",
              fontSize: "22px",
            }}
          >
            Inbox
          </span>
        </Box>
        <Box
          onClick={handleClose}
          sx={{
            marginTop: "19px",
            marginLeft: "10px",
            width: "212px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <img src={inbox} style={{ width: "22px", marginLeft: "32px" }} */}
          <span
            style={{
              cursor: "pointer",
              marginLeft: "27px",
              fontWeight: "400",
              fontSize: "22px",
            }}
          >
            Inbox
          </span>
        </Box>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </Box>
  );
}
