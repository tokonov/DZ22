import React from 'react';


const AboutUs = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.info.tittle}</h1>
            <h1>{props.info.subtitle}</h1>
        </div>
    );
};

export default AboutUs;