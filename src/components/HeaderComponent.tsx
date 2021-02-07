import React from "react";
import CollectRImage from '../images/CollectRImage.png'

export const HeaderComponent: React.FC = () => {
    return <>
    <header className="App-header">
        <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
      </header>
    </>
}