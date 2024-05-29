import React, { useState, useEffect } from "react";

import { AxiosAuth } from "../Utils/AxiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property




  useEffect(() => {

    AxiosAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        // console.log(res.data)
        setColorList(res.data)
      })
      .catch(err => console.log(err))
  }, []);


  const updateColors = (updatedColor) => {
    const colors = colorList.map(color => {
      if (color.id === updatedColor.id) {
        return updatedColor
      } else {
        return color
      }
    })
    setColorList(colors)
  }

  const deleteColors = (colorId) => {
    const newColorsList = colorList.filter((color) => {
      return color.id !== colorId
    })
    setColorList(newColorsList)
  }


  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} deleteColors={deleteColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
