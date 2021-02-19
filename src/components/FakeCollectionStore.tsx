import { createContext } from "react";
import { CollectionModel } from "../domain/CollectionModel";
import { FakeCollectionPage } from "./FakeCollectionPage";

class FakeCollectionStore {
    public collections: CollectionModel[] = [];

    public getCollections = (): CollectionModel[] => {
        return this.collections;
    }

    public setCollections = (newCollections: CollectionModel[]): void => {
        this.collections = newCollections;
    }
}

const _fakeCollectionStore = new FakeCollectionStore();
export default createContext(_fakeCollectionStore);