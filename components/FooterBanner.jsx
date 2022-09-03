import React from "react"

import { urlFor } from "../lib/client"

const FooterBanner = ({ footerBanner: { image2 } }) => {
  return (
    <div>
      <img src={urlFor(image2)} className="footer-banner-image" />
    </div>
  )
}

export default FooterBanner
