import { createContext } from "react";
import { CollectionItemModel } from "../domain/CollectionItemModel";
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

    public setFavorite = (favoritedItem: CollectionItemModel) => {
        const favorites: CollectionItemModel[] = JSON.parse(localStorage.getItem("favorites") || "[]");

        favorites.push(favoritedItem);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    public getFavorites = (): CollectionItemModel[] => {
        const favorites: CollectionItemModel[] = JSON.parse(localStorage.getItem("favorites") || "[]");
        return favorites;
    }
}

const _fakeCollectionStore = new FakeCollectionStore();
export default createContext(_fakeCollectionStore);