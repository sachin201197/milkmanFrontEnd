import { Link } from "react-router-dom";
// import croppedppLogo from "../../images/cropped-pp-logo.png";
// import ppLogo from "../../images/pp-logo.png";
import {
  Grid,
  AppBar,
  Paper,
  Box,
  Toolbar,
  Button,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      background: `linear-gradient(to right, rgb(161, 255, 206, 0.3), rgb(250, 255, 209, 0.3))`,
    },
    root: {
      flexGrow: 1,
      background: `linear-gradient(to right, rgb(161, 255, 206, 0.05), rgb(250, 255, 209, 0.05))`,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    link: {
      textDecoration: "none",
    },
    appBarButton: {
      margin: 13,
      height: 48,
      fontSize: 24,
      textTransform: "none",
      background: "#7D5260",
      borderRadius: 100,
      "@media (max-width: 1024px)": {
        height: 32,
        fontSize: 16,
        margin: 8,
      },
    },
    ctaButton: {
      margin: 12,
      height: 64,
      width: 256,
      fontSize: 28,
      textTransform: "none",

      borderRadius: 100,
      "@media (max-width: 1024px)": {
        height: 48,
        fontSize: 20,
      },
    },
    logoImage: {
      marginTop: 8,
      width: 144,
      height: 128,
      "@media (max-width: 1024px)": {
        width: 64,
        height: 64,
      },
    },
    buttonGroup: {
      textAlign: "left",
    },
    ppLogoCTA: {
      width: "50%",
    },
    landingPageImage: {
      float: "right",
      height: "80vh",
      borderRadius: 24,
    },
    callToActionContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    callToAction: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 100,
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
    },
    ctaText: {
      color: theme.palette.primary.main,
      fontSize: 28,
    },
    aboutUsHeading: {
      color: theme.palette.primary.main,
      textAlign: "center",
      padding: 32,
    },
    aboutUsText: {
      textAlign: "center",
      fontSize: 22,
      paddingBottom: 32,
      [theme.breakpoints.down("md")]: {
        fontSize: 18,
      },
    },
    imageList: {
      display: "flex",
      justifyContent: "center",
    },
    imageListItemBar: {
      backgroundColor: theme.palette.primary.main,
      opacity: "75%",
    },
    footer: {
      background: "#79747E",
      opacity: "60%",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    footerText: {
      padding: 4,
      textAlign: "center",
      fontWeight: "bold",
    },
  };
});

function LandingPage() {
  const { classes } = useStyles();
  return (
    // <Box className={classes.mainBox}>
    //   <Box>
    //     <AppBar position="static" className={classes.root} elevation={0}>
    //       <Toolbar className={classes.toolbar}>
    //         <img
    //           className={classes.logoImage}
    //           src={
    //             "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F77%2F200377-050-4326767F%2Fmilk-splashing-glass.jpg&tbnid=_S5p0slQuzXnmM&vet=12ahUKEwjXp5zJxPiEAxWmyzgGHbK3Dm8QMygAegQIARBx..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fmilk&docid=orVrhkE0UmHbZM&w=1600&h=1146&q=milk&ved=2ahUKEwjXp5zJxPiEAxWmyzgGHbK3Dm8QMygAegQIARBx"
    //           }
    //           alt="person with a camera"
    //         />
    //         <div className={classes.buttonGroup}>
    //           <Link to="/contact-us" className={classes.link}>
    //             <Button variant="contained" className={classes.appBarButton}>
    //               Contact Us
    //             </Button>
    //           </Link>
    //           <Link to="/register-photo-studio" className={classes.link}>
    //             <Button variant="contained" className={classes.appBarButton}>
    //               Partner With Us
    //             </Button>
    //           </Link>
    //         </div>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    //   <Grid container className={classes.callToActionContainer}>
    //     <Grid item container xs={6} className={classes.callToActionContainer}>
    //       <Box className={classes.callToAction}>
    //         <Typography
    //           variant="h3"
    //           color="inherit"
    //           className={classes.contactUsHeading}
    //         >
    //           <Box className={classes.ppLogoCTA}>
    //             <img
    //               src={"data:image/jpeg;base64,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"}
    //               alt="person with a camera with name of project"
    //             />
    //           </Box>
    //         </Typography>
    <Typography color="inherit" className={classes.ctaText} align="center">
      Find The native products in Namma Bengaluru...
    </Typography>
    //         <Link to="/login" className={classes.link}>
    //           <Button variant="contained" className={classes.ctaButton}>
    //             Log In
    //           </Button>
    //         </Link>
    //         <Link to="/signup" className={classes.link}>
    //           <Button variant="contained" className={classes.ctaButton}>
    //             Sign Up
    //           </Button>
    //         </Link>
    //       </Box>
    //     </Grid>

    //     <Grid
    //       item
    //       xs={6}
    //       sx={{
    //         display: { xs: "none", sm: "none", md: "none", lg: "block" },
    //       }}
    //     >
    //       <img
    //         src=""
    //         className={classes.landingPageImage}
    //         alt="person with a camera in a studio setting"
    //       />
    //     </Grid>
    //   </Grid>

    //   <Divider />

    //   <Typography
    //     variant="h4"
    //     color="inherit"
    //     className={classes.aboutUsHeading}
    //   >
    //     ABOUT US
    //   </Typography>
    //   <Typography color="inherit" className={classes.aboutUsText}>
    //     Picture Perfect is a platform which helps users find photographers in
    //     their city for their events - weddings, birthdays, engagements,
    //     corporate events etc.
    //   </Typography>
    //   <Divider />
    //   <Typography
    //     variant="h4"
    //     color="inherit"
    //     className={classes.aboutUsHeading}
    //   >
    //     SOME GLIMPSES
    //   </Typography>
    //   <Box className={classes.imageList}>
    //     <ImageList sx={{ width: 1024 }}>
    //       {itemData.map((item) => (
    //         <ImageListItem key={item.img}>
    //           <img
    //             src={`${item.img}?w=720&fit=crop&auto=format`}
    //             srcSet={`${item.img}?w=720&fit=crop&auto=format&dpr=2 2x`}
    //             alt={item.title}
    //             loading="lazy"
    //           />
    //           <ImageListItemBar
    //             title={item.title}
    //             className={classes.imageListItemBar}
    //           />
    //         </ImageListItem>
    //       ))}
    //     </ImageList>
    //   </Box>

    //   <Paper className={classes.footer}>
    //     <Typography color="inherit" className={classes.footerText}>
    //       Picture Perfect ©
    //     </Typography>
    //   </Paper>
    // </Box>
  );
}

export default LandingPage;

const itemData = [
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/wedding.jpeg",
  //   title: "Wedding",
  // },
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/babies-and-kids.jpeg",
  //   title: "Babies & Kids",
  // },
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/special-occasion.jpeg",
  //   title: "Special Occasion",
  // },
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/fashion.png",
  //   title: "Fashion & Portfolio",
  // },
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/commercial.jpeg",
  //   title: "Commercial",
  // },
  // {
  //   img: "https://picture-perfect-pesto.s3.ap-south-1.amazonaws.com/corporate.jpeg",
  //   title: "Corporate Events",
  // },
];
