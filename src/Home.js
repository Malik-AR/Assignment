import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
  localStorage.setItem("Key", JSON.stringify(""));
  return (
    <>
      <Box sx={{ width: "auto" }} className="recentDiv">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4} sm={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h5"
                >
                  Select Album
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  You can see differnt images of Album by selecting id of the Album
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => window.location.replace("/selectAlbum")} size="small">Select Album</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4} sm={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
              <Typography
                  variant="h5"
                >
                  Recent Album
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                 Here you will display some recent Album if you have visited some Album
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => window.location.replace("/recentAlbum")} size="small">Recent Album</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4} sm={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
              <Typography
                  variant="h5"
                >
                  Find Number
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Here you can find the Second largest Number in an array
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => window.location.replace("/findNumber")} size="small">Find Number</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
