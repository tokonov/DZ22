import React from 'react';
import AboutUs from "../AboutUs/AboutUs";

const Page = () => {
    const text = {title: "hello", subtitle: "lorem lorem lorem"}

    return (
        <div>
             <AboutUs tittle={text}/>
        </div>
    );
};

export default Page;