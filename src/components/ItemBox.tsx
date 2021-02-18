import React, { useState } from "react";
import "./ItemBox.css";

export interface ItemBoxProps {
  itemName: string;
  itemDescription: string;
  itemId: number;
  itemPhoto: string;
  onDeleteHandler: (itemId: number) => void;
  descriptionChangedHandler: (newValue: string, itemId: number) => void;
  nameChangedHandler: (newName: string, itemId: number) => void;
}

export const ItemBox: React.FC<ItemBoxProps> = ({
  itemName,
  itemDescription,
  itemId,
  itemPhoto,
  onDeleteHandler,
  descriptionChangedHandler,
  nameChangedHandler,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [displayedItemDescription, setDisplayedItemDescription] = useState(
    itemDescription
  );
  const [displayedItemName, setDisplayedItemName] = useState(itemName);
  const deleteItem = () => {
    onDeleteHandler(itemId);
  };

  const onDescriptionChanged = () => {
    descriptionChangedHandler(displayedItemDescription, itemId);
    setIsEditingDesc(false);
  };

  const onNameChanged = () => {
    nameChangedHandler(displayedItemName, itemId);
    setIsEditingName(false);
  };

  return (
    <>
      {/* <div className="wrapping-items"> */}
        <div className="right-item">
          {isEditingName && (
            <>
              <input
                type="text"
                value={displayedItemName}
                onChange={(e) => {
                  setDisplayedItemName(e.target.value);
                }}
              />
              <button onClick={onNameChanged}>Save</button>
              <button onClick={() => setIsEditingName(false)}>Cancel</button>
            </>
          )}
          {!isEditingName && (
            <>
              <h1 className="box-text">{displayedItemName}</h1>
              <button onClick={() => setIsEditingName(true)}>Edit Name</button>
              <button onClick={() => setIsEditingDesc(true)}>Edit Description</button>
              <button onClick={deleteItem}>Delete</button>
            </>
          )}
          <div>
          <img className="item-image" src={itemPhoto} alt="Item Image" width="150" height="150"/>
          </div>
          {!isEditingDesc && (
            <>
              <p className="description-text">{displayedItemDescription}</p>
            </>
          )}
          {isEditingDesc && (
            <>
              <input
                type="text"
                value={displayedItemDescription}
                onChange={(e) => {
                  setDisplayedItemDescription(e.target.value);
                }}
              />
              <button onClick={onDescriptionChanged}>Save</button>
              <button onClick={() => setIsEditingDesc(false)}>Cancel</button>
            </>
          )}
        </div>
      {/* </div> */}
    </>
  );
};
