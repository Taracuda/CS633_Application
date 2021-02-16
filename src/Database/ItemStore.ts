import { createContext } from "react";
import { CollectionItemModel } from "../domain/CollectionItemModel";

class ItemStore {
    items: CollectionItemModel[] = [];

    public createItem = (newItem: CollectionItemModel): void => {
        newItem.itemId = this.items.length + Math.floor((Math.random() * 100));
        this.items.push(newItem);
    }

    public deleteItem = (itemId: number) => {
        this.items = this.items.filter((currectItem: CollectionItemModel) => currectItem.itemId !== itemId );
    }

    public updateItem = (updatedItem: CollectionItemModel) => {
        this.deleteItem(updatedItem.itemId);
        this.items.push(updatedItem);
    }
}



const _itemStore = new ItemStore();
export default createContext(_itemStore);
