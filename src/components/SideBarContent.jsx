import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Message from "./Message";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import FadeMenu from "./More";

function Leftpanel() {
  return (
    <Box
      sx={{
        paddingTop: "90px",
        position: "fixed",
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        width: "245px",
      }}
    >
      <Message />
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MailIcon style={{ width: "22px", marginLeft: "32px" }} />
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
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StarBorderIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Starred
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessTimeIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Snoozed
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SendIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Send
        </span>
      </Box>
      <Box
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
      {/* <FadeMenu /> */}
    </Box>
  );
}

export default Leftpanel;
