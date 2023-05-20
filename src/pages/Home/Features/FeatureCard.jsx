import React from 'react'

const FeatureCard = ({feature}) => {
    return (
        <div className='feature-card p-2'>
            <img src={feature.image}></img>
            <h3 className='fs-5 mt-2'>{feature.name}</h3>
            <p>{feature.description}</p>
        </div>
    )
}

export default FeatureCard