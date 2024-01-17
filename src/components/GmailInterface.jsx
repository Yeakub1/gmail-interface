import Middle from "./Middle";
import Navbar from "./Navbar";
import PersistentDrawerLeft from "./SideBarContent";
import { Grid } from "@mui/material";

const GmailInterface = () => {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={2}>
            <PersistentDrawerLeft />
          </Grid>
          <Grid item xs={9}>
            <Middle/>
          </Grid>
        </Grid>
      </div>
    );
};

export default GmailInterface;