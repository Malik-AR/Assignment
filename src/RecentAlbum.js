import React, { useEffect, useState } from "react";
import { get, isEmpty } from "lodash";
import "./App.css";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const RecentAlbum = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const recentKeys = JSON.parse(localStorage.getItem("Key"));

  const recentAlbumFirst =
    !isEmpty(data) &&
    data.filter((v) => v.albumId == get(recentKeys, "[0]", "")).slice(48);
  const recentAlbumSecond =
    !isEmpty(data) &&
    data.filter((v) => v.albumId == get(recentKeys, "[1]", "")).slice(48);
  const recentAlbumThird =
    !isEmpty(data) &&
    data.filter((v) => v.albumId == get(recentKeys, "[2]", "")).slice(48);

    // const dd = !isEmpty(recentAlbumFirst) && recentAlbumFirst.find((d) => d.albumId).albumId;
    // console.log(dd, "dd")

  return (
    <>
      <Box sx={{ width: "auto" }} className="recentDiv">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <div className="firstDiv">
              <h2>First Recent Album Data</h2>
              <h3>Album Id: {!isEmpty(recentAlbumFirst) && recentAlbumFirst.find((d) => d.albumId).albumId}</h3>
              <hr />
              {isEmpty(recentAlbumFirst) ? (
                <h4>No Data Found in this Album</h4>
              ) : (
                <ImageList
                  sx={{ width: "auto", height: 450 }}
                  cols={1}
                  rowHeight={200}
                  variant="quilted"
                >
                  {!isEmpty(recentAlbumFirst) &&
                    recentAlbumFirst.map((item) => (
                      <ImageListItem key={item.id}>
                        <img
                          src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                        />
                        <figcaption>{`${item.title}`}</figcaption>
                      </ImageListItem>
                    ))}
                </ImageList>
              )}
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="secondDiv">
              <h2>Second Recent Album Data</h2>
              <h3>Album Id: {!isEmpty(recentAlbumSecond) && recentAlbumSecond.find((d) => d.albumId).albumId}</h3>
              <hr />
              {isEmpty(recentAlbumSecond) ? (
                <h4>No Data Found in this Album</h4>
              ) : (
                <ImageList
                  sx={{ width: "auto", height: 450 }}
                  cols={1}
                  rowHeight={200}
                  variant="quilted"
                >
                  {!isEmpty(recentAlbumSecond) &&
                    recentAlbumSecond.map((item) => (
                      <ImageListItem key={item.id}>
                        <img
                          src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                        />
                        <figcaption>{`${item.title}`}</figcaption>
                      </ImageListItem>
                    ))}
                </ImageList>
              )}
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="thirdDiv">
              <h2>Third Recent Album Data</h2>
              <h3>Album Id: {!isEmpty(recentAlbumThird) && recentAlbumThird.find((d) => d.albumId).albumId}</h3>
              <hr />
              {isEmpty(recentAlbumThird) ? (
                <h4>No Data Found in this Album</h4>
              ) : (
                <ImageList
                  sx={{ width: "auto", height: 450 }}
                  cols={1}
                  rowHeight={200}
                  variant="quilted"
                >
                  {!isEmpty(recentAlbumThird) &&
                    recentAlbumThird.map((item) => (
                      <ImageListItem key={item.id}>
                        <img
                          src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                        />
                        <figcaption>{`${item.title}`}</figcaption>
                      </ImageListItem>
                    ))}
                </ImageList>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecentAlbum;
