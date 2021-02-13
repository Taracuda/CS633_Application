import React, { useState } from "react";
import CollectRImage from "../images/CollectR.jpg";
import './PageLayoutComponent.css';

export const PageLayoutComponent: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [collectionTitle, setCollectionTitle] = useState('');
    const [checkedValue, setCheckedValue] = useState(false);

    const onFormSubmit = () => {
        alert(`Collection Name - ${collectionTitle} is private ? ${checkedValue}`)
        setShowModal(false);
    }

  return (
    <>
      <div className="wrapper">
        <div className="main-container container">
          <div className="child item">
            <div className="left-side">
              <div className="left-box">
                <h1 className="box-text">Box 1</h1>
              </div>
              <div className="left-box">
                <h1 className="box-text">Box 2</h1>
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
                <div className="right-item" onClick={() => {setShowModal(true)}}>
                  <h1 className="box-text">Box 1</h1>
                </div>
                <div className="right-item">
                  <h1 className="box-text">Box 2</h1>
                </div>
                <div className="right-item">
                  <h1 className="box-text">Box 3</h1>
                </div>
              </div>
              <div className="right-row">
                {/* these divs are temporary. They will be replaced with a component that is styled */}
                <div className="right-item">
                  <h1 className="box-text">Box 4</h1>
                </div>
                <div className="right-item">
                  <h1 className="box-text">Box 5</h1>
                </div>
                <div className="right-item">
                  <h1 className="box-text">Box 6</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
          <div className="modal">
            <form onSubmit={onFormSubmit}>
                <div className="inputGroup">
                    <label>Collection Name</label>
                    <input type='text' value={collectionTitle} onChange={(e)=> {setCollectionTitle(e.target.value)}} />
                </div>
                <div className='inputGroup'>
                    <label>Private?</label>
                    <input type='checkbox' checked={checkedValue} onChange={() => {
                        setCheckedValue(!checkedValue)
                    }} />
                </div>
               
                <button type='submit'>Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
      )}
    </>
  );
};
