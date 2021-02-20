import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import CollectRImage from "../images/CollectR.jpg";
import { CollectionItemModel } from "../domain/CollectionItemModel";
import { CollectionModel } from "../domain/CollectionModel";
import { ItemBox } from "./ItemBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CollectionStore from "../Database/CollectionStore";
import { RouteComponentProps } from "react-router-dom";

const element = <FontAwesomeIcon icon={faPlus} className="add-icon" />;

interface MatchParams {
  id: string;
}

export interface CollectionPageProps extends RouteComponentProps<MatchParams> {
  collection: CollectionModel;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  collection,
  match,
}) => {
  //const store = useContext(ItemStore);

  // We need to get the collection id off of the Route.

  const collectionStore = useContext(CollectionStore);

  // // Use that id to get the current collection we are working with
  // const currentCollection = collectionStore.collections.find((x: CollectionModel) => x.collectionId === 1);

  // // Get the items off of that collection
  // const itemsToUse = currentCollection!.items;

  const [currentCollection, setCurrentCollection] = useState<CollectionModel>();
  const [showModal, setShowModal] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPhoto, setItemPhoto] = useState("");
  const [collectionItems, setCollectionItems] = useState<CollectionItemModel[]>(
    []
  );

  useEffect(() => {
    const id = match.params.id;
    const collectionFromStore = collectionStore.collections.find(
      (x: CollectionModel) => x.collectionId === +id
    );
    if (collectionFromStore) {
      setCurrentCollection(collectionFromStore);
      setCollectionItems(collectionFromStore.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFormSubmit = () => {
    const items = collectionItems;
    const newCollectionItem = {
      itemId: collectionItems.length + Math.floor(Math.random() * 100),
      itemTitle: itemTitle,
      itemDescription: itemDescription,
      itemPhoto: itemPhoto,
      favorited: false
    };

    if (collectionItems.length < 10) {
      items.push(newCollectionItem);
      setCollectionItems(items);
      setItemTitle("");
      setItemDescription("");
      setItemPhoto("");
      setShowModal(false);
    } else {
      setItemTitle("");
      setItemDescription("");
      setItemPhoto("");
      setShowModal(false);
      alert("A collection is allowed 10 or less items.");
    }
  };

  const onItemDelete = (itemId: number) => {
    setCollectionItems(
      collectionItems.filter(
        (currectCollectionItem: CollectionItemModel) =>
          currectCollectionItem.itemId !== itemId
      )
    );

    collectionStore.deleteItem(itemId, currentCollection!.collectionId);
  };

  const handleFavorites = (itemId: number) => {
    const itemToUpdate = collectionItems.find(
      (ci: CollectionItemModel) => ci.itemId === itemId
    );


    collectionStore.setFavorite(itemToUpdate!);
  }


  const handleDescriptionChanged = (newDescription: string, itemId: number) => {
    const itemToUpdate = collectionItems.find(
      (ci: CollectionItemModel) => ci.itemId === itemId
    );

    // Update the item in local state ->  itemToUpdate!.itemDescription = newDescription;
    itemToUpdate!.itemDescription = newDescription;

    // Update this item in the collection store.
    collectionStore.updateItem(itemToUpdate!, currentCollection!.collectionId);
  };

  const handleNameChanged = (newName: string, itemId: number) => {
    const itemToUpdate = collectionItems.find(
      (ci: CollectionItemModel) => ci.itemId === itemId
    );

    // Update the item in local state -> itemToUpdate!.itemTitle = newName;
    itemToUpdate!.itemTitle = newName;

    // Update this item in the collection store.
    collectionStore.updateItem(itemToUpdate!, currentCollection!.collectionId);
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
                    setItemTitle("");
                    setItemDescription("");
                    setItemPhoto("");
                    setShowModal(true);
                  }}
                >
                  <h1 className="box-text">Add an Item</h1>
                  {element}
                  <div className="add-icon">
                    <i className="fas fa-plus fa-9x"></i>
                  </div>
                </div>
                {collectionItems.map(
                  (col: CollectionItemModel, index: number) => {
                    return (
                      <ItemBox
                        itemId={col.itemId}
                        itemName={col.itemTitle}
                        itemDescription={col.itemDescription}
                        itemPhoto={col.itemPhoto}
                        key={index}
                        onDeleteHandler={onItemDelete}
                        descriptionChangedHandler={handleDescriptionChanged}
                        nameChangedHandler={handleNameChanged}
                        onFavoriteHandler={handleFavorites}
                        favorited={col.favorited}
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
      {showModal && (
        <div className="modal">
          <form>
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
            <div className="inputGroup">
              <label>Image URL</label>
              <input
                type="text"
                value={itemPhoto}
                onChange={(e) => {
                  setItemPhoto(e.target.value);
                }}
              />
            </div>

            <button onClick={() => onFormSubmit()}>Submit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};
