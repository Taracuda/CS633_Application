import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CollectionBox.css";

export interface FakeCollectionBoxProps {
  collectionName: string;
  collectionId: number;
  isPrivate: boolean;
  collectionPhoto: string;
}

export const FakeCollectionBox: React.FC<FakeCollectionBoxProps> = ({collectionName, collectionId, isPrivate, collectionPhoto}) => {
    const [displayedCollectionName] = useState(collectionName);


  return (
    <>
      <div className="right-item">
        <>
          <h1 className="box-text">{displayedCollectionName}</h1>
        </>
        <div>
        <img className='collection-image' src={collectionPhoto} alt='Collection' width="150" height="150"/>
        </div>
      </div>
    </>
  );
};
