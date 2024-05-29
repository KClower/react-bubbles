import React, { useState } from "react";

import { AxiosAuth } from "../Utils/AxiosAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, deleteColors }) => {
  // console.log("these are the colors", colors);

  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit({ ...color });
  };

  const saveEdit = e => {
    e.preventDefault();
    console.log(colorToEdit)
    AxiosAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        updateColors(res.data)
        setColorToEdit(initialColor)
        setEditing(false)
      })
      .catch(err => console.log(err))
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = (e) => {
    e.stopPropagation();
    const colorId = Number(e.target.getAttribute("data-colorid"))

    AxiosAuth()
      .delete(`http://localhost:5000/api/colors/${colorId}`)
      .then(res => {
        deleteColors(res.data)
        console.log(res)

      })
      .catch(err => console.log(err))

    // make a delete request to delete this color
  };




  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span data-colorid={`${color.id}`} className="delete" onClick={deleteColor}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
