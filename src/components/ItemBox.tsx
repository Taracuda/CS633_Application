import React, { useState } from "react";
import "./ItemBox.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const favorite = <FontAwesomeIcon icon={faHeart} className="favorite-icon" />;

export interface ItemBoxProps {
  itemName: string;
  itemDescription: string;
  itemId: number;
  itemPhoto: string;
  favorited: boolean;
  onDeleteHandler: (itemId: number) => void;
  descriptionChangedHandler: (newValue: string, itemId: number) => void;
  nameChangedHandler: (newName: string, itemId: number) => void;
  onFavoriteHandler: (itemId: number) => void;
}

export const ItemBox: React.FC<ItemBoxProps> = ({
  itemName,
  itemDescription,
  itemId,
  itemPhoto,
  onDeleteHandler,
  descriptionChangedHandler,
  nameChangedHandler,
  onFavoriteHandler,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [displayedItemDescription, setDisplayedItemDescription] = useState(
    itemDescription
  );
  const [displayedItemName, setDisplayedItemName] = useState(itemName);
  const [isFavorited, setIsFavorited] = useState(false);
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

  const onItemFavorited = () => {
    setIsFavorited(true);
    onFavoriteHandler(itemId);
    if (isFavorited) {
    alert("Item added to your favorites");
    }
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
            <button onClick={() => setIsEditingDesc(true)}>
              Edit Description
            </button>
            <button onClick={deleteItem}>Delete</button>
            
            <div onClick={() => {onItemFavorited()}}>
            {favorite}
            </div>
          </>
        )}
        <div>
          <img
            className="item-image"
            src={itemPhoto}
            alt="Item"
            width="150"
            height="150"
          />
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
