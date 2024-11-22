import React from 'react'
import FixtureCard from './fixturecard'
import { fixtures } from '../data/fixtures'

const Fixtures = () => {
  return (
    <div className='results-section'>
      {fixtures.map((item, index) => (
        <FixtureCard 
          item={item} 
          key={index} 
        />
      ))}
    </div>
  )
}

export default Fixtures
