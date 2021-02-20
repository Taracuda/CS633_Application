import React, { useContext, useEffect, useState } from "react";
import CollectionStore from "../Database/CollectionStore";
import { CollectionItemModel } from "../domain/CollectionItemModel";
import CollectRImage from "../images/CollectR.jpg";
import { ItemBox } from "./ItemBox";

export const FavoritesPageComponent: React.FC = () => {
  const store = useContext(CollectionStore);
  const [favoritedItems, setFavoritedItems] = useState<CollectionItemModel[]>(
    []
  );

  useEffect(() => {
   setFavoritedItems(store.getFavorites());
  }, []);

  
  return (
    <div className="wrapper">
      <div className="main-container container">
        <div className="child item">
          <div className="left-side">
            <div className="left-box">
              <h1 className="box-text">User</h1>
            </div>
            <div className="left-box">
              <h1 className="box-text">Collection Name</h1>
            </div>
            <div className="left-box">
              <img
                src={CollectRImage}
                className="CollectR-logo"
                alt="CollectR-logo"
              />
            </div>
          </div>
        </div>
        <div className="child item-center">
          <div className="right-side">
            <div className="right-row">
              {favoritedItems.map(
                (col: CollectionItemModel, index: number) => {
                  return (
                    <ItemBox
                      itemId={col.itemId}
                      itemName={col.itemTitle}
                      itemDescription={col.itemDescription}
                      itemPhoto={col.itemPhoto}
                      key={index}
                      onDeleteHandler={() => {}}
                      descriptionChangedHandler={() => {}}
                      nameChangedHandler={() => {}}
                      favorited={col.favorited}
                      onFavoriteHandler={() => {}}
                    />
                  );
                }
              )}
            </div>
          </div>
          <div className="right-row"></div>
        </div>
      </div>
    </div>
  );
};
