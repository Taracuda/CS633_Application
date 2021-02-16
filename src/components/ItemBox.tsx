import React, { useState } from "react";
import "./ItemBox.css";

export interface ItemBoxProps {
  itemName: string;
  itemDescription: string;
  itemId: number;
  imageUrl: string;
  onDeleteHandler: (itemId: number) => void;
  descriptionChangedHandler: (newValue: string, itemId: number) => void;
  nameChangedHandler: (newName: string, itemId: number) => void;
}

export const ItemBox: React.FC<ItemBoxProps> = ({
  itemName,
  itemDescription,
  itemId,
  imageUrl,
  onDeleteHandler,
  descriptionChangedHandler,
  nameChangedHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayedItemDescription, setDisplayedItemDescription] = useState(
    itemDescription
  );
  const [displayedItemName, setDisplayedItemName] = useState(itemName);
  const deleteItem = () => {
    onDeleteHandler(itemId);
  };

  const onDescriptionChanged = () => {
    descriptionChangedHandler(displayedItemDescription, itemId);
    setIsEditing(false);
  };

  const onNameChanged = () => {
    nameChangedHandler(displayedItemName, itemId);
    setIsEditing(false);
  };

  return (
    <>
      {/* <div className="wrapping-items"> */}
        <div className="right-item">
          {isEditing && (
            <>
              <input
                type="text"
                value={displayedItemName}
                onChange={(e) => {
                  setDisplayedItemName(e.target.value);
                }}
              />
              <button onClick={onDescriptionChanged}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
          {!isEditing && (
            <>
              <h1 className="box-text">{displayedItemName}</h1>
              <button onClick={() => setIsEditing(true)}>Edit Name</button>
              <button onClick={deleteItem}>Delete Item</button>
            </>
          )}
          <img className="item-image" src={imageUrl} alt="doggo" />
          <p className="description-text">{displayedItemDescription}</p>
        </div>
      {/* </div> */}
    </>
  );
};
