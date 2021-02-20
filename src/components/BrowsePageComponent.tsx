import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CollectionStore from "../Database/CollectionStore";
import { CollectionModel } from "../domain/CollectionModel";
import { useState } from "react";
import { useEffect } from "react";
import "./PageLayoutComponent.css";
import { CollectionBox } from "./CollectionBox";
import CollectRImage from "../images/CollectR.jpg";
import { Link } from "react-router-dom";
import _fakeCollectionStore from "./FakeCollectionStore";
import FakeCollectionStore from "./FakeCollectionStore";

const favorite = <FontAwesomeIcon icon={faHeart} className="add-icon" />;

export const BrowsePageComponent: React.FC = () => {
  const store = useContext(CollectionStore);

  const tempCollections: CollectionModel[] = [];

  const [collections, setCollections] = useState<CollectionModel[]>(
    store.collections
  );

  const fakeStore = useContext(FakeCollectionStore);

  useEffect(() => {
    createData();
    setCollections(tempCollections);
    fakeStore.setCollections(tempCollections);
  }, []);

  const createData = () => {
    tempCollections.push({
      collectionId: 10,
      collectionName: "Harry Potter Funko Pops",
      isPrivate: false,
      collectionPhoto: "https://i.imgur.com/U3lKNB2.png",
      items: [
        {
          itemPhoto: "https://i.imgur.com/cfwXfqs.png",
          itemDescription: "Draco with a spider on his face",
          itemId: 10,
          itemTitle: "Draco Malfoy",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/wGCYka8.png",
          itemDescription: "Dumbledore dressed for a holiday party",
          itemId: 11,
          itemTitle: "Dumbledore",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/A0TqFqF.png",
          itemDescription: "Fawkes the phoenix",
          itemId: 12,
          itemTitle: "Fawkes",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/Cih1wBD.png",
          itemDescription: "Harry Potter with his wand",
          itemId: 13,
          itemTitle: "Harry Potter",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/dbsJkHH.png",
          itemDescription: "Giant Hedwig",
          itemId: 14,
          itemTitle: "Hedwig",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/QGE4TgX.png",
          itemDescription: "Ron and a bucket of slugs",
          itemId: 15,
          itemTitle: "Ron Weasley",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/hv7rZAO.png",
          itemDescription: "Hermione dressed for the Yule Ball",
          itemId: 16,
          itemTitle: "Hermione Granger",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/DGuI8fR.png",
          itemDescription: "Luna dressed for class",
          itemId: 17,
          itemTitle: "Luna Lovegood",
          favorited: false
        },
      ],
    });

    tempCollections.push({
      collectionId: 11,
      collectionName: "Vintage Movie Posters",
      isPrivate: false,
      collectionPhoto: "https://i.imgur.com/2IxPxoA.png",
      items: [
        {
          itemPhoto: "https://i.imgur.com/uSM5lEY.png",
          itemDescription: "Sleeping Beauty, 1959 on Linen",
          itemId: 20,
          itemTitle: "Sleeping Beauty",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/UAnmUh2.png",
          itemDescription: "It's a Wonderful Life, 1946",
          itemId: 21,
          itemTitle: "It's a Wonderful Life",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/nJFgMOj.png",
          itemDescription: "Help! The Beatles, 1965",
          itemId: 22,
          itemTitle: "Help!",
          favorited: false
        },
      ],
    });

    tempCollections.push({
      collectionId: 12,
      collectionName: "Baseball Cards",
      isPrivate: false,
      collectionPhoto: "https://i.imgur.com/UAnmUh2.png",
      items: [
        {
          itemPhoto: "https://i.imgur.com/br44lT1.png",
          itemDescription: "Cal Ripken card",
          itemId: 30,
          itemTitle: "Cal Ripken",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/mfOiEaC.png",
          itemDescription: "Dwight Gooden card",
          itemId: 31,
          itemTitle: "Dwight Gooden",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/csPOXqX.png",
          itemDescription: "Bo Jackson card",
          itemId: 32,
          itemTitle: "Bo Jackson",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/ikdovtw.png",
          itemDescription: "Chipper Jones card",
          itemId: 33,
          itemTitle: "Chipper Jones",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/RBfaQc2.png",
          itemDescription: "Frank Thomas card",
          itemId: 34,
          itemTitle: "Frank Thomas",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/WsNLNmn.png",
          itemDescription: "Harold Baines card",
          itemId: 35,
          itemTitle: "Harold Baines",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/ic920LT.png",
          itemDescription: "Jose Canseco card",
          itemId: 36,
          itemTitle: "Jose Canseco",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/2UfRCmN.png",
          itemDescription: "Ken Griffey Jr. card",
          itemId: 37,
          itemTitle: "Ken Griffey Jr.",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/mZpDPmE.png",
          itemDescription: "Ozzie Smith card",
          itemId: 38,
          itemTitle: "Ozzie Smith",
          favorited: false
        },
        {
          itemPhoto: "https://i.imgur.com/wAHxg9K.png",
          itemDescription: "Pete Rose card",
          itemId: 39,
          itemTitle: "Pete Rose",
          favorited: false
        },
      ],
    });

    tempCollections.push({
      collectionId: 13,
      collectionName: "Cool Autographs",
      isPrivate: false,
      collectionPhoto:
        "https://i.imgur.com/cYrGruV.png",
      items: [
        {
          itemPhoto:
            "https://i.imgur.com/cYrGruV.png",
          itemDescription: "William Shatner's autograph",
          itemId: 40,
          itemTitle: "William Shatner",
          favorited: false
        },
        {
          itemPhoto:
          "https://i.imgur.com/xcSxHYF.png",
          itemDescription: "Game of Thrones cast autograph",
          itemId: 41,
          itemTitle: "Game of Thrones cast",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/5yjOZwD.png",
          itemDescription: "Dan Aykroyd's autograph",
          itemId: 42,
          itemTitle: "Dan Aykroyd, Ghostbusters",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/TPKoePl.png",
          itemDescription: "Supernatural cast autograph",
          itemId: 43,
          itemTitle: "Supernatural cast",
          favorited: false
        },
      ],
    });

    tempCollections.push({
      collectionId: 14,
      collectionName: "TY Beanie Babies",
      isPrivate: false,
      collectionPhoto:
        "https://i.imgur.com/yDTLY2L.png",
      items: [
        {
          itemPhoto:
            "https://i.imgur.com/01ViD8W.png",
          itemDescription: "Rainbow crab",
          itemId: 50,
          itemTitle: "Crab",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/BoEiJVq.png",
          itemDescription: "Otter with seaweed",
          itemId: 51,
          itemTitle: "Otter",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/EFAc9Zz.png",
          itemDescription: "Peace",
          itemId: 52,
          itemTitle: "Peace Bear",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/7Iw7226.png",
          itemDescription: "Pinky flamingo",
          itemId: 53,
          itemTitle: "Flamingo",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/KygdUB8.png",
          itemDescription: "Princess Diana Bear",
          itemId: 54,
          itemTitle: "Diana Bear",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/7wlGzGZ.png",
          itemDescription: "Valentino Bear",
          itemId: 55,
          itemTitle: "Valentino",
          favorited: false
        },
      ],
    });

    tempCollections.push({
      collectionId: 15,
      collectionName: "Vinyl Records",
      isPrivate: false,
      collectionPhoto:
        "https://i.imgur.com/ejESckU.png",
      items: [
        {
          itemPhoto:
            "https://i.imgur.com/PHPM3WM.png",
          itemDescription: "Queen II",
          itemId: 60,
          itemTitle: "Queen",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/JDcfqL9.png",
          itemDescription: "Dark Side of the Moon",
          itemId: 61,
          itemTitle: "Pink Floyd",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/DXXnn34.png",
          itemDescription: "Destroyer",
          itemId: 62,
          itemTitle: "Kiss",
          favorited: false
        },
        {
          itemPhoto:
            "https://i.imgur.com/kR9Midl.png",
          itemDescription: "Rubber Soul",
          itemId: 63,
          itemTitle: "The Beatles",
          favorited: false
        },
      ],
    });
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
                <h1 className="box-text">Collections</h1>
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

                {collections.map((col: CollectionModel, index: number) => {
                   
                  return (
            <Link to={`/browseItems/${col.collectionId}`}>
            <CollectionBox
                      collectionId={col.collectionId}
                      collectionName={col.collectionName}
                      isPrivate={col.isPrivate}
                      collectionPhoto={col.collectionPhoto}
                      key={index}
                      onDeleteHandler={() => {}}
                      isPrivateHandler={() => {}}
                      nameChangedHandler={() => {}}
                    />
                    </Link>
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
    </>
  );
};
