import React from 'react'
import FeaturesData from '/public/data/features.json'
import FeatureCard from './FeatureCard'
import './Features.css'
const Features = () => {
    return (
        <div className='features-section mx-14' data-aos="fade-up" data-aos-offset="1500" data-aos-duration="3000">
            <div className='our-features container p-5 '>
            <h1 className='text-3xl font-bold text-center text-gray-800 uppercase py-8'>Our Featured Toys</h1>
                <div className='features-item-container text-white'>
                {
                    FeaturesData.map(feature=><FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
                </div>
            </div>
        </div>
    )
}

export default Features