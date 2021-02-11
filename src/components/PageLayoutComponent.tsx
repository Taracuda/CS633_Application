import React from "react";
import CollectRImage from '../images/CollectRImage.png'

export const PageLayoutComponent: React.FC = () => {

    return (
        <div className='wrapper'>
            <div className='main-container container'>
                <div className='child item'>
                    <div className='left-side'>
                        <div className='left-box'>
                            <h1 className='box-text'>Box 1</h1>
                        </div>
                        <div className='left-box'>
                            <h1 className='box-text'>Box 2</h1>
                        </div>
                        <div className='left-box'>
                            <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
                        </div>
                    </div>
                </div>
                <div className='child item-center'>
                    <div className='right-side'>
                        <div className='right-row'>
                            <div className='right-item'><h1 className='box-text'>Box 1</h1></div>
                            <div className='right-item'><h1 className='box-text'>Box 2</h1></div>
                            <div className='right-item'><h1 className='box-text'>Box 3</h1></div>
                        </div>
                        <div className='right-row'>
                            <div className='right-item'><h1 className='box-text'>Box 4</h1></div>
                            <div className='right-item'><h1 className='box-text'>Box 5</h1></div>
                            <div className='right-item'><h1 className='box-text'>Box 6</h1></div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}
