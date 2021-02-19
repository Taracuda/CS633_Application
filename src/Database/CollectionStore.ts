import { createContext } from "react";
import { CollectionItemModel } from "../domain/CollectionItemModel";
import { CollectionModel } from "../domain/CollectionModel";

class CollectionStore {
    collections: CollectionModel[] = [];

    public createCollection = (newCollection: CollectionModel): void => {
        newCollection.collectionId = this.collections.length + Math.floor((Math.random() * 100));
        this.collections.push(newCollection);
    }

    public deleteCollection = (collectionId: number) => {
        this.collections = this.collections.filter((currectCollection: CollectionModel) => currectCollection.collectionId !== collectionId );
    }

    public updateCollection = (updatedCollection: CollectionModel) => {
        this.deleteCollection(updatedCollection.collectionId);
        this.collections.push(updatedCollection);
    }

    public createItem = (newItem: CollectionItemModel, collectionId: number): void => {
        const collectionToUpdate = this.collections.find((c: CollectionModel) => c.collectionId === collectionId);
        newItem.itemId = collectionToUpdate!.items.length + Math.floor((Math.random() * 100));
        collectionToUpdate!.items.push(newItem);
    }

    public deleteItem = (itemId: number, collectionId: number) => {
        const collectionToUpdate = this.collections.find((c: CollectionModel) => c.collectionId === collectionId);
        collectionToUpdate!.items = collectionToUpdate!.items.filter((currectItem: CollectionItemModel) => currectItem.itemId !== itemId );
    }

    public updateItem = (updatedItem: CollectionItemModel, collectionId: number) => {
        const collectionToUpdate = this.collections.find((c: CollectionModel) => c.collectionId === collectionId);
        this.deleteItem(updatedItem.itemId, collectionId);
        collectionToUpdate!.items.push(updatedItem);
    }
}



const _collectionStore = new CollectionStore();
export default createContext(_collectionStore);
