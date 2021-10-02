import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

export default function RecipeReviewCard() {
  return (
    <Card fullwidth>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#03DAC6" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton color="secondary" aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title={<Typography color="secondary">Front ENd</Typography>}
        subheader={
          <Typography color="secondary">September 14, 2016</Typography>
        }
      />

      <CardContent>
        <Typography color="secondary" variant="h6">
          Node JS
        </Typography>
        <Typography variant="body2" color="secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
