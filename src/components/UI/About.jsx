import React from 'react';
import '../../styles/about.css';

import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'Our first working progress embodies our vision, showcasing initial efforts toward our goal. Stay tuned as we refine and evolve.'
    },
    
    {
        icon: 'ri-team-line',
        title: 'Dedicated Team',
        desc: 'Custom teams for your needs, ensuring dedicated support and collaboration for best results.'
    },

    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Hours support',
        desc: 'Always available support for peace of mind and seamless operations, ensuring help whenever needed, 24/7.'
    },
]

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h6 className="subtitle">Why Choose Us</h6>
                    <h2>Specialist in abiding clients on</h2>
                    <h2 className="highlight"> financial challenges</h2>
                    <p className='description about__content-desc'>
                        Our website is dedicated to providing valuable insights, resources, 
                        and solutions to help individuals and businesses thrive in the digital landscape. 
                        Explore and empower your online journey with us.
                    </p>

                    <div className='choose__item-wrapper'>
                        {chooseData.map((item, index) => (
                            <div className="choose__us-item" key={index}>
                            <span className="choose__us-icon">
                                <i class={item.icon}></i>
                            </span>
                            <div>
                                <h4 className="choose__us-title">{item.title}</h4>
                                <p className="description">{item.desc}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About