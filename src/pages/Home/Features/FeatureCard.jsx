import React from 'react'

const FeatureCard = ({feature}) => {
    return (
        <div className='feature-card p-2 text-indigo-500'>
            <img src={feature.image} className='h-96'></img>
            <h3 className='fs-5 mt-2 text-2xl'>{feature.name}</h3>
            <button className='btn btn-info'>Details</button>
        </div>
    )
}

export default FeatureCard