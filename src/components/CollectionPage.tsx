import React, { useState } from 'react';
import { CollectionItemModel } from '../domain/CollectionItemModel';
import { CollectionModel } from '../domain/CollectionModel';

export interface CollectionPageProps {
    collection: CollectionModel;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({collection}) => {
    const [collectionItems, setCollectionItems] = useState<CollectionItemModel[]>(collection.items)
    return <>
    <p>This is where items should show</p></>
}