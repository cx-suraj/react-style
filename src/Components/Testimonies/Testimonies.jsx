import React from 'react'
import profile from './Rectangle952.png'
import './sstyle.css'
export const Testimonies = () => {
    return (
        <div className="container-fluid">
            <div className="testimonies">
                <div className="heading">
                    <div className="text-center fw-bolder fs-2">What People Say About <span>CreatorX</span></div>
                    <div className="text-center fs-5">Few of our Testimonies</div>
                </div>
                <div className="cards d-flex flex-row justify-content-evenly align-items-center">
                    <div className="testimonies-card">
                        {/* card  */}
                        <div className="data">
                            Campaigns with CultureX have not only helped us penetrate in the regional markets but have also helped us on creative alignments. CultureX delivers the much-needed strategic acumen, effective TAT, and committed results</div>

                        <div className="profile " style={{ padding: '2rem' }}>
                            <div className="profile-image">
                                <img src={profile} alt="" />
                            </div>
                            <div className="profile-content d-flex">
                                <div className="profile-name">Nirali gandhi</div>
                                <div className="profile-position">Video Creator, Bengal</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
