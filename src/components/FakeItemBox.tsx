import React, { useState } from "react";
import "./ItemBox.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const favorite = <FontAwesomeIcon icon={faHeart} className="favorite-icon" />;

export interface FakeItemBoxProps {
  itemName: string;
  itemDescription: string;
  itemId: number;
  itemPhoto: string;
  onFavoriteHandler: (itemId: number) => void;
}

export const FakeItemBox: React.FC<FakeItemBoxProps> = ({
  itemName,
  itemDescription,
  itemPhoto,
  itemId,
  onFavoriteHandler
}) => {
  const [displayedItemDescription] = useState(
    itemDescription
  );
  const [displayedItemName] = useState(itemName);
  const [isFavorited, setIsFavorited] = useState(false);

  const onItemFavorited = () => {
    setIsFavorited(true);
    onFavoriteHandler(itemId);
    if (isFavorited) {
    alert("Item added to your favorites");
    }
  };

  return (
    <>
      <div className="right-item">
        <>
          <h1 className="box-text">{displayedItemName}</h1>
          <div onClick={() => {onItemFavorited()}}>
            {favorite}
            </div>
        </>
        <div>
          <img
            className="item-image"
            src={itemPhoto}
            alt="Item"
            width="150"
            height="150"
          />
        </div>
        <>
          <p className="description-text">{displayedItemDescription}</p>
        </>
      </div>
    </>
  );
};
