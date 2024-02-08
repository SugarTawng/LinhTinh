import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ItemList = ({ items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleMenuOpen = (event, itemId) => {
    setAnchorEl(event.currentTarget);
    setSelectedItemId(itemId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItemId(null);
  };

  const handleActionClick = (action) => {
    // Xử lý logic khi action được bấm
    console.log(`Item ${selectedItemId} - Action: ${action}`);
    handleMenuClose();
  };

  return (
    <div>
      <h2>Item List</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={(e) => handleMenuOpen(e, item.id)}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      ))}

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleActionClick("Action 1")}>
          Action 1
        </MenuItem>
        <MenuItem onClick={() => handleActionClick("Action 2")}>
          Action 2
        </MenuItem>
        <MenuItem onClick={() => handleActionClick("Action 3")}>
          Action 3
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ItemList;
