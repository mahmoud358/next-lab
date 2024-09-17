import {Box,Typography,} from "@mui/material";
  import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

//   import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
//   import TwitterIcon from "@mui/icons-material/Twitter";
//   import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
    return ( 
        <>
        <Box sx={{bgcolor:"primary"}}>
        <Toolbar>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1}}>
            @Copyright 2024 codemonetor
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
          >
            Cookie Policy
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
          >
            Privacy Policy
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
          >
            Tearms of service
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
          >
            Careers
          </Button>

          {/* <Button color="inherit">Help Center</Button>
          <Button color="inherit">
            <FacebookRoundedIcon />
          </Button>
          <Button color="inherit">
            <TwitterIcon />
          </Button>
          <Button color="inherit">
            <LinkedInIcon />
          </Button> */}
        </Toolbar>
      </Box>
        </>
     );
}

export default Footer;