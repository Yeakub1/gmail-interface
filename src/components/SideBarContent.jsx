import Box from "@mui/material/Box";
import inbox from "../assets/images/inbox.png";
import send from "../assets/images/send.png";
import snooze from "../assets/images/snooze.png";
import star from "../assets/images/star.png";
import Message from "./Message";
import FadeMenu from "./More";

function Leftpanel() {
  return (
    <Box
      sx={{
        paddingTop: "90px",
        position: 'fixed',
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
        <img src={inbox} style={{ width: "22px", marginLeft: "32px" }} />
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
        <img src={star} style={{ width: "22px", marginLeft: "32px" }} />
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
        <img src={snooze} style={{ width: "22px", marginLeft: "32px" }} />
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
        <img src={send} style={{ width: "22px", marginLeft: "32px" }} />
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
      <FadeMenu />
    </Box>
  );
}

export default Leftpanel;
