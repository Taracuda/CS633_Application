import React, { useContext, useEffect, useState } from "react";
import CollectRImage from "../images/CollectR.jpg";
import { observer } from "mobx-react-lite";
import "./PageLayoutComponent.css";
import CollectionStore from "../Database/CollectionStore";
import { CollectionModel } from "../domain/CollectionModel";
import { CollectionBox } from "./CollectionBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlus} className="add-icon" />

const PageLayoutComponent: React.FC = () => {
  const store = useContext(CollectionStore);

  const [showModal, setShowModal] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [checkedValue, setCheckedValue] = useState(false);
  const [collections, setCollections] = useState<CollectionModel[]>(
    store.collections
  );

  useEffect(() => {
    setCollections(store.collections);
  }, [store.collections]);

  const onFormSubmit = () => {
    store.createCollection({
      collectionId: 0,
      collectionName: collectionTitle,
      isPrivate: checkedValue,
    });
    setShowModal(false);
  };

  const onCollectionDelete = (collectionId: number) => {
    setCollections(
      collections.filter(
        (currectCollection: CollectionModel) =>
          currectCollection.collectionId !== collectionId
      )
    );
    store.deleteCollection(collectionId);
  };

  const handlePrivateChanged = (value: boolean, collectionId: number) => {
    const updatedCollections: CollectionModel[] = collections.map(
      (c: CollectionModel) => {
        if (c.collectionId === collectionId) {
          c.isPrivate = !c.isPrivate;
        }

        return c;
      }
    );

    if (updatedCollections) {
      setCollections(updatedCollections);
    }
  };

  const handleNameChanged = (newName: string, collectionId: number) => {
    const namedCollections: CollectionModel[] = collections.map(
      (c: CollectionModel) => {
        if (c.collectionId === collectionId) {
          c.collectionName = newName;
        }

        return c;
      }
    );

    if (namedCollections) {
      setCollections(namedCollections);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-container container">
          <div className="child item">
            <div className="left-side">
              <div className="left-box">
                <h1 className="box-text">Box 1</h1>
              </div>
              <div className="left-box">
                <h1 className="box-text">Box 2</h1>
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
                {/* these divs are temporary. They will be replaced with a component that is styled */}
                <div
                  className="right-item"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <h1 className="box-text">Add a Collection</h1>
                  {element}
                  <div className="add-icon"><i className="fas fa-plus fa-9x"></i></div>
                </div>
                {collections.map((col: CollectionModel, index: number) => {
                  return (
                    <CollectionBox
                      collectionId={col.collectionId}
                      collectionName={col.collectionName}
                      isPrivate={col.isPrivate}
                      imageUrl={"http://placecorgi.com/260/180"}
                      key={index}
                      onDeleteHandler={onCollectionDelete}
                      isPrivateHandler={handlePrivateChanged}
                      nameChangedHandler={handleNameChanged}
                    />
                  );
                })}
              </div>
              <div className="right-row">
                {/* these divs are temporary. They will be replaced with a component that is styled */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <form onSubmit={onFormSubmit}>
            <div className="inputGroup">
              <label>Collection Name</label>
              <input
                type="text"
                value={collectionTitle}
                onChange={(e) => {
                  setCollectionTitle(e.target.value);
                }}
              />
            </div>
            <div className="inputGroup">
              <label>Private?</label>
              <input
                type="checkbox"
                checked={checkedValue}
                onChange={() => {
                  setCheckedValue(!checkedValue);
                }}
              />
            </div>

            <button type="submit">Submit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default observer(PageLayoutComponent);
