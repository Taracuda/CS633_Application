import React, { useContext, useEffect, useState } from "react";
import CollectRImage from "../images/CollectR.jpg";
import { CollectionItemModel } from "../domain/CollectionItemModel";
import { ItemBox } from "./ItemBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { RouteComponentProps } from "react-router-dom";
import FakeCollectionStore from "./FakeCollectionStore";
import { CollectionModel } from "../domain/CollectionModel";

const element = <FontAwesomeIcon icon={faPlus} className="add-icon" />;

interface MatchParams {
  id: string;
}

export interface FakeCollectionPageProps
  extends RouteComponentProps<MatchParams> {}

export const FakeCollectionPage: React.FC<FakeCollectionPageProps> = ({
  match,
}) => {
  const fakeStore = useContext(FakeCollectionStore);
  const [collectionItems, setCollectionItems] = useState<CollectionItemModel[]>(
    []
  );
  const [filteredItems, setFilteredItems] = useState<CollectionItemModel[]>([]);
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const id = match.params.id;
    const collectionFromStore = fakeStore.collections.find(
      (x: CollectionModel) => x.collectionId === +id
    );
    if (collectionFromStore) {
      setCollectionItems(collectionFromStore.items);
    }
  });

  const handleFavorites = (itemId: number) => {
    const itemToUpdate = collectionItems.find(
      (ci: CollectionItemModel) => ci.itemId === itemId
    );

    fakeStore.setFavorite(itemToUpdate!);
  };

  const filterItems = () => {
    const items = collectionItems.filter((i: CollectionItemModel) => {
      return i.itemTitle.toLowerCase().includes(filterTerm.toLowerCase());
    });

    setFilteredItems(items);
    setShowFilteredItems(true);
  }

  return (
    <>
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
              <input type="text" value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} />
              <button onClick={filterItems}>Filter</button>
              {showFilteredItems && filteredItems.length > 0 && (
                <div className="right-row">
                  <h1>Filtered Items</h1>
                  {filteredItems.map(
                    (col: CollectionItemModel, index: number) => {
                      return (
                        <ItemBox
                          itemId={col.itemId}
                          itemName={col.itemTitle}
                          itemDescription={col.itemDescription}
                          itemPhoto={col.itemPhoto}
                          favorited={col.favorited}
                          key={index}
                          onDeleteHandler={() => {}}
                          descriptionChangedHandler={() => {}}
                          nameChangedHandler={() => {}}
                          onFavoriteHandler={handleFavorites}
                        />
                      );
                    }
                  )}
                  <button onClick={() => {
                    setShowFilteredItems(false);
                    setFilteredItems([]);
                    setFilterTerm("");
                  }}>Close</button>
                </div>
              )}

{showFilteredItems && filteredItems.length === 0 && (
                <div className="right-row">
                  <h1>No Items Found</h1>
                  <button onClick={() => {
                    setShowFilteredItems(false);
                    setFilteredItems([]);
                    setFilterTerm("");
                  }}>Close</button>
                </div>
              )}

              {!showFilteredItems && (
                <div className="right-row">
                  {collectionItems.map(
                    (col: CollectionItemModel, index: number) => {
                      return (
                        <ItemBox
                          itemId={col.itemId}
                          itemName={col.itemTitle}
                          itemDescription={col.itemDescription}
                          itemPhoto={col.itemPhoto}
                          favorited={col.favorited}
                          key={index}
                          onDeleteHandler={() => {}}
                          descriptionChangedHandler={() => {}}
                          nameChangedHandler={() => {}}
                          onFavoriteHandler={handleFavorites}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
            <div className="right-row"></div>
          </div>
        </div>
      </div>
    </>
  );
};
