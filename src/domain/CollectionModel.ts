import { CollectionItemModel } from "./CollectionItemModel";

export interface CollectionModel {
    collectionName: string;
    isPrivate: boolean;
    collectionId: number;
    collectionPhoto: string;
    items: CollectionItemModel[];
}
