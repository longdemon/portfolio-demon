import React from 'react'
import CV from '../../assets/CV-Nguyen Vu Long.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} target="_blank" rel="noopener noreferrer">
          <div>
            <p>My CV</p>
            <p className='text-japanese'>私の履歴書</p>
          </div>
        </a>
        <a className='btn btn-primary' href="#contact">
          <div>
            <p>Let's Talk</p>
            <p className='text-japanese'>接続</p>
          </div>
        </a>
    </div>
  )
}

export default CTA