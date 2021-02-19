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

  useEffect(() => {
    const id = match.params.id;
    const collectionFromStore = fakeStore.collections.find(
      (x: CollectionModel) => x.collectionId === +id
    );
    if (collectionFromStore) {
      setCollectionItems(collectionFromStore.items);
    }
  });

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
              <div className="right-row">
                {collectionItems.map(
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
    </>
  );
};
