import React from 'react';
import IntroVid from '../../assets/intro.mp4';

const Intro = () => {
    return (
        <section className='section__intro'>
            <video src={IntroVid} autoPlay muted loop></video>
        </section>
    );
};

export default Intro;
