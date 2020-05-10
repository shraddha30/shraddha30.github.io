import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section>
      <p>I started this blog to share my learnings on accessibility.</p>
      <p>I have always been passionate about user experience. As a software engineer, my goal is to put the user first. 
      Accessibility combines my love for technology and building products for all kinds of users, devices and more.</p>
      <p>I plan on sharing one article per week.</p>  
    </section>
    
    
    <section id="articles" className="articles-list">
      <ul>
        <li>
          <Link to="/alt-images/">Text Alternatives for Images</Link>    
        </li>
      </ul>
      
    </section>
    
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
