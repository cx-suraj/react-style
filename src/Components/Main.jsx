import React from 'react'
import './Main.css'
import image1 from '../assests/image1.png';
import image2 from '../assests/image2.png';
import image3 from '../assests/image3.png';
import image4 from '../assests/image4.png';
import image5 from '../assests/image5.png';
import image6 from '../assests/image5.png';
import { BrandWithUs } from './BrandWithUs';

export const Main = () => {
    let cards = [
        { image: <img src={image1} alt="" />, description: <div className='text-card'>This is description</div> },
        { image: <img src={image2} alt="" />, description: <div className='text-card'>This is description</div> },
        { image: <img src={image3} alt="" />, description: <div className='text-card'>This is description</div> },
        { image: <img src={image4} alt="" />, description: <div className='text-card'>This is description</div> },
        { image: <img src={image5} alt="" />, description: <div className='text-card'>This is description</div> },
        { image: <img src={image6} alt="" />, description: <div className='text-card'>This is description</div> },
    ]

    return (
        <div className="container-fluid">
            <div className="brands">
                <div className="header">
                    <div className="text">
                        <div>For</div>
                        <div id='liner'>BRANDS</div>
                    </div>
                    <button className="button-54">Start Now !!</button>
                </div>
                <div className="right">
                    <div className='div-shadow' style={{ width: '30px', height: '100%', position: 'inherit', top: '0px', left: '0px', zIndex: 5}}></div>
                    <BrandWithUs cards={cards} />
                </div>
            </div>
            <div className="brands">
                <div className="header">
                    <div className="text">
                        <div>For</div>
                        <div id='liner'>BRANDS</div>
                    </div>
                    <button className="button-54">Start Now !!</button>
                </div>
                <div className="right"><BrandWithUs cards={cards} /></div>
            </div>

        </div>
    )
}
