import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./App.css";

const Header = () => {
  return (
    <>
      <div className="headerStyle">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => window.location.replace("/")}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => window.location.replace("/selectAlbum")}
          >
            Select Album
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => window.location.replace("/recentAlbum")}
          >
            Recent Album
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => window.location.replace("/findNumber")}
          >
            Find Number
          </Button>
        </Stack>
      </div>
      <hr />
    </>
  );
};

export default Header;
