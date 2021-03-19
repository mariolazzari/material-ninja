import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

//styles
const useStyles = makeStyles(theme => ({
  field: {
    margin: theme.spacing(2, 0),
    display: "block",
  },
}));

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetails(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create new note
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          onChange={e => setTitle(e.target.value)}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          className={classes.field}
          onChange={e => setDetails(e.target.value)}
          label="Note detail"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <Button
          className={classes.btn}
          variant="contained"
          type="submit"
          color="secondary"
          onClick={() => console.log("click")}
          //startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
