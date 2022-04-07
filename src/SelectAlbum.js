import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const SelectAlbum = () => {
  var text = [];
  for (let i = 1; i <= 100; i++) {
    text.push(i);
  }

  const [albumId, setAlbumId] = useState("");
  const [data, setData] = useState("");
  const [recentId, setRecentId] = useState(JSON.parse(localStorage.getItem("Key")));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const displayData = !isEmpty(data) && data.filter((v) => v.albumId == albumId);

  var array = [...recentId];
  const recentData = (value) => {
    if (recentId.length < 3) {
      array.push(value);
      setRecentId(array);
    } else {
      array.shift();
      array.push(value);
      setRecentId(array);
    }
    localStorage.setItem("Key", JSON.stringify(array));
  };

  return (
    <div className="selectDiv">
      <label>Select an Album Id which you want to visit: </label>
      <select
        onChange={(e) => {
          setAlbumId(e.target.value);
          recentData(e.target.value);
        }}
      >
        <option disabled selected>
          Select
        </option>
        {text.map((v) => (
          <option>{v}</option>
        ))}
      </select>

      {isEmpty(albumId) ? (
        <div>
          <h1>No Id Selected by You</h1>
        </div>
      ) : (
        <ImageList sx={{ width: 1350, height: 460 }} cols={10} rowHeight={150}>
          {!isEmpty(displayData) && displayData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default SelectAlbum;
