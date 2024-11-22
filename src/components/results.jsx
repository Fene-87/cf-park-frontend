import React from 'react'
import ResultCard from './resultcard'
import { results } from '../data/results'

const Results = () => {
  return (
    <div className='results-section'>
      {results.map((item, index) => (
        <ResultCard
          key={index}
          item={item}
         />
      ))}
    </div>
  )
}

export default Results
