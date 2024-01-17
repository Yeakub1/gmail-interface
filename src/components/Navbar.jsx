/* eslint-disable no-unused-vars */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import gmail from "../assets/logo.png";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "./Profile";
import { styled } from "@mui/material";
import {
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
} from "@mui/icons-material";

const OptionsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  & > svg {
    margin-left: 20px;
  }
`;

export default function Navbar() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            zIndex: "2",
            backgroundColor: "#F9F9F9",
            minHeight: "95px",
            paddingTop: "5px",
            paddingRight: "30px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: "16px", color: "#3C3C3C" }}
                >
                  <MenuIcon sx={{ width: "2vw", marginLeft: "2vw" }} />
                </IconButton>
                <img src={gmail} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  marginLeft: "57px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "600px",
                  height: "60px",
                }}
              >
                <SearchIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                    alignItems: "center",
                    marginLeft: "15px",
                    color: "black",
                  }}
                />
                <input
                  placeholder="Search mail"
                  style={{
                    marginLeft: "30px",
                    height: "10px",
                    width: "200px",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={1}>
              <OptionsWrapper>
                <HelpOutlineOutlined color="action" />
                <SettingsOutlined color="action" />
                <AppsOutlined color="action" />
                <Profile />
              </OptionsWrapper>
            </Grid>
          </Box>
        </AppBar>
      </Box>
    </Grid>
  );
}
