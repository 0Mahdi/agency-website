import React from 'react';
import '../../styles/services.css';

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Creating user-friendly mobile apps with seamless functionality and engaging interfaces.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Creating visually appealing and functional websites through layout, typography, and graphics.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Crafting visually stunning graphics with creativity, precision, and attention to detail.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Graphics Design',
        desc: 'Online brand promotion through strategic ads, content, and audience engagement.'
    },
]

const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2 className="highlight"> our best services</h2>
            </div>

            <div className="service__item-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="services__item" key={index}>
                            <span className="service__icon">
                                <i class={item.icon}></i>
                            </span>
                            <h3 className="service__title">{item.title}</h3>
                            <p className='description'>
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services