import React, { useContext, useEffect, useState } from 'react';
import CollectRImage from "../images/CollectR.jpg";
import ItemStore from "../Database/ItemStore";
import { CollectionItemModel } from '../domain/CollectionItemModel';
import { CollectionModel } from '../domain/CollectionModel';
import { ItemBox } from "./ItemBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlus} className="add-icon" />

export interface CollectionPageProps {
    collection: CollectionModel;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({collection}) => {
    const store = useContext(ItemStore);
    const [showModal, setShowModal] = useState(false);
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [collectionItems, setCollectionItems] = useState<CollectionItemModel[]>(store.items);

    useEffect(() => {
      setCollectionItems(store.items);
    }, [store.items]);

    const onFormSubmit = () => {
      store.createItem({
        itemId: 0,
        itemTitle: itemTitle,
        itemDescription: itemDescription
      });
      setShowModal(false);
    };

    const onItemDelete = (itemId: number) => {
      setCollectionItems(
        collectionItems.filter(
          (currectCollectionItem: CollectionItemModel) =>
            currectCollectionItem.itemId !== itemId
        )
      );
      store.deleteItem(itemId);
    };

    const handleDescriptionChanged = (newDescription: string, itemId: number) => {
      // TODO
    };

    const handleNameChanged = (newName: string, itemId: number) => {
      // TODO
    };

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
                  <div
                    className="right-item"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <h1 className="box-text">Add an Item</h1>
                    {element}
                    <div className="add-icon"><i className="fas fa-plus fa-9x"></i></div>
                  </div>
                  {collectionItems.map((col: CollectionItemModel, index: number) => {
                    return (
                      <ItemBox
                        itemId={col.itemId}
                        itemName={col.itemTitle}
                        itemDescription={col.itemDescription}
                        imageUrl={"http://placecorgi.com/260/180"}
                        key={index}
                        onDeleteHandler={onItemDelete}
                        descriptionChangedHandler={handleDescriptionChanged}
                        nameChangedHandler={handleNameChanged}
                      />
                    );
                  })}
                </div>
                <div className="right-row">
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal">
            <form onSubmit={onFormSubmit}>
              <div className="inputGroup">
                <label>Item Name</label>
                <input
                  type="text"
                  value={itemTitle}
                  onChange={(e) => {
                    setItemTitle(e.target.value);
                  }}
                />
              </div>
              <div className="inputGroup">
                <label>Description</label>
                <input
                  type="text"
                  value={itemDescription}
                  onChange={(e) => {
                    setItemDescription(e.target.value);
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
}
