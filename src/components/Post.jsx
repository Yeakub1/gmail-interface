import { StarRate, StarBorder } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Post = () => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActions disableSpacing >
        <Checkbox {...label} />
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<StarBorder />}
            checkedIcon={<StarRate sx={{ color: "yellow" }} />}
          />
        </IconButton>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Yekaub
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit
            natus doloremque illo similique quaerat dolore nostrum quas..
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default Post;
