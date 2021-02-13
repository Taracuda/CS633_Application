import { createContext } from "react";
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
}



const _collectionStore = new CollectionStore();
export default createContext(_collectionStore);