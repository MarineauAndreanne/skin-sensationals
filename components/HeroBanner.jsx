import React from "react"
import Link from "next/link"

import { urlFor } from "../lib/client"

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-text">
        <p className="skincare">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <div>
          <Link href="#products">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
