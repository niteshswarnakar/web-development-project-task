import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  marginTop: {
    margin: "50px 0 0 0",
  },
  inputField: {
    marginBottom: "16px",
  },
  navContainer: {
    display: "flex",
    gap: "12px",
  },
  linkDecoration: {
    textDecoration: "none",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    width: "100%",
  },
  formDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "50vh",
    margin: "0 auto",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SingupformContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    width: "100%",
  },
  SingupformDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "60vh",
    margin: "0 auto",
  },
  SingupgridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  DashboardContainer: {
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  DashboardDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "34px",
  },
  errorMessage: {
    color: "red",
    alignSelf: "flex-start",
    fontSize: "14px",
    marginTop: "-4px",
    marginLeft: "4px",
  },
  emailNotFoundMessage: {
    marginTop: "-8px",
  },
});

export default useStyles;
