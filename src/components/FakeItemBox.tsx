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
}

export const FakeItemBox: React.FC<FakeItemBoxProps> = ({
  itemName,
  itemDescription,
  itemPhoto,
}) => {
  const [displayedItemDescription] = useState(
    itemDescription
  );
  const [displayedItemName] = useState(itemName);

  return (
    <>
      <div className="right-item">
        <>
          <h1 className="box-text">{displayedItemName}</h1>
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
