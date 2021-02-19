import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CollectionBox.css";

export interface CollectionBoxProps {
  collectionName: string;
  collectionId: number;
  isPrivate: boolean;
  collectionPhoto: string;
  onDeleteHandler: (collectionId: number) => void;
  isPrivateHandler: (newValue: boolean, collectionId: number) => void;
  nameChangedHandler: (newName: string, collectionId: number) => void;
}

export const CollectionBox: React.FC<CollectionBoxProps> = ({collectionName, collectionId, isPrivate, collectionPhoto, onDeleteHandler, isPrivateHandler, nameChangedHandler}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [displayedCollectionName, setDisplayedCollectionName] = useState(collectionName);
    const deleteCollection = () => {
        onDeleteHandler(collectionId);
    }

    const onPrivateChanged = () => {
        isPrivateHandler(!isPrivate, collectionId);
    }

    const onNameChanged = () => {
        nameChangedHandler(displayedCollectionName, collectionId);
        setIsEditing(false);
    }



  return (
    <>
      <div className="right-item">
          {isEditing && (
              <>
              <input type="text" value={displayedCollectionName} onChange={(e) => {setDisplayedCollectionName(e.target.value)}} />
              <button onClick={onNameChanged}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              </>

          )
          }
          {!isEditing && (
              <>
              <h1 className="box-text">{displayedCollectionName}</h1>
            
            <button onClick={() => setIsEditing(true)}>Edit Name</button>
            <button onClick={deleteCollection}>Delete</button>
            </>
          )}
        <div>
        <img className='collection-image' src={collectionPhoto} alt='Collection' width="150" height="150"/>
        </div>
        <div>
            <span>Private Collection?</span>
            <input type="checkbox" checked={isPrivate} onChange={onPrivateChanged} />
        </div>
      </div>
    </>
  );
};
