import React from 'react';

const UserProfile = () => {
    return (
        <div className="UserProfile">
            <div className="User">
                <div className="name">Rose</div>
                <div className="image"><img alt="Pro-pic" src="https://s3-us-west-2.amazonaws.com/thecoderlist/testing/coder-man-profile-pic.png" /></div>
            </div>
            <div className="UserProfile-menu">
                <div className="UserProfileSwitch">
                    <ul>
                        <li>
                            <div className="UserProfile-image">
                                <img alt="pro2" src="http://lorempixel.com/96/96" />
                            </div>
                            <div className="UserProfile-name">
                                Alexander
                            </div>
                        </li>
                        <li>
                            <div className="UserProfile-image">
                                <img alt="pro3" src="http://lorempixel.com/96/96" />
                            </div>
                            <div className="UserProfile-name">
                                Scott
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="UserNavigation">
                    <ul>
                        <li>Your Account</li>
                        <li>Help Center</li>
                        <li>Sign out of Netflix</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;