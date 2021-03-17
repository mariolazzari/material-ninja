import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import ButtonGroup from "@material-ui/core/ButtonGroup";
// icons
//import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

//styles
const useStyles = makeStyles(theme => ({
  btn: {
    fontSize: 16,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
    title: {
      textDecoration: "underline",
      marginBottom: 20,
    },
  },
}));

const Create = () => {
  const classes = useStyles();

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

      {/*
      <ButtonGroup color="secondary">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>

      */}
    </Container>
  );
};

export default Create;
