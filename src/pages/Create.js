import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Create = () => {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create new note
      </Typography>
      <Button>ok</Button>
    </div>
  );
};

export default Create;
