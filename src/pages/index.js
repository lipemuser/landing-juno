import React from "react"

import Wrapper from "../App/Wrapper"
import SEO from "../App/seo"
import MainBanner from "../App/Banners/main"
import HowItWorks from "../App/HowItWorks/index"
import IssueBilling from '../App/IssueBilling/index'

const IndexPage = () => (
  <Wrapper>
    <SEO title="Landing Page | Juno" lang="pt" />
    <>
      <MainBanner height="535px" className="opa" />
      <HowItWorks />
      <IssueBilling />
    </>
  </Wrapper>
)

export default IndexPage
