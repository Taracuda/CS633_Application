import { Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import CollectRImage from "../images/CollectR.jpg";
import { observer } from "mobx-react-lite";
import "./PageLayoutComponent.css";
import CollectionStore from "../Database/CollectionStore";
import { CollectionModel } from "../domain/CollectionModel";
import { CollectionBox } from "./CollectionBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { NavbarComponent } from './NavbarComponent';

const element = <FontAwesomeIcon icon={faPlus} className="add-icon" />

const PageLayoutComponent: React.FC = () => {
  const store = useContext(CollectionStore);

  const [showModal, setShowModal] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [checkedValue, setCheckedValue] = useState(false);
  const [collectionPhoto, setCollectionPhoto] = useState("");
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
      collectionPhoto: collectionPhoto,
      items: []
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
            <NavbarComponent/>
              <div className="left-box">
              </div>
              <div className="left-box">
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
                      collectionPhoto={col.collectionPhoto}
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
            <div className="inputGroup">
              <label>Image URL</label>
              <input
                type="text"
                value={collectionPhoto}
                onChange={(e) => {
                  setCollectionPhoto(e.target.value);
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
