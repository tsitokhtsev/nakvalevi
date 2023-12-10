import React from 'react'
import { Link } from 'react-router-dom'

import Heading from 'components/atoms/Heading'

const targets = {
  'ქართული ლიტერატურის შესწავლა და გააზრება გაგიადვილოთ': 'book',
  'კონკრეტულ საკითხზე სხვადასხვა ხედვა მოგაწოდოთ': 'eye',
  'ნაშრომები შევინახოთ და გავავრცელოთ': 'cloud',
  'წარუშლელი ნაკვალევი დავტოვოთ': 'favicon',
}

const Home = () => {
  const renderHero = () => {
    const title = 'გავკვალოთ ცოდნის გზა'

    return (
      <div className="Hero Section">
        <div className="Hero-Content Section-Content">
          <div className="Hero-Title">
            { title.split(' ').map((word) => (
              <p>
                <span key={ word } className="Hero-Text">
                  { word.toUpperCase() }
                </span>
              </p>
            )) }
          </div>
          <button >
            <Link to={ 'timeline' } className="Hero-Button Button_primary">
              { 'ქრონოლოგია'.toUpperCase() }
            </Link>
          </button>
        </div>
      </div>
    )
  }

  const renderTargets = () => (
    <div className="Targets Section">
      <Heading text="ჩვენი მიზანია" />
      <div className="Targets-Wrapper">
        { Object.keys(targets).map((target) => (
          <div key={ target } className="Targets-Target Section-Content">
            { targets[target] }
            <div className="Targets-TargetText">
              <p>{ target.toUpperCase() }</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  )

  return (
    <div className="Home">
      { renderHero() }
      { renderTargets() }
    </div>
  )
}

export default Home
