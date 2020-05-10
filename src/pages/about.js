import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// const onClick = (e) => {
// 	var range = document.createRange();
//     range.selectNode(document.getElementById("email"));
//     window.getSelection().removeAllRanges(); // clear current selection
//     window.getSelection().addRange(range); // to select text
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges(); // to deselect
// }

const About = () => (
  <Layout>
    <section>
        <h2>About</h2>
        <p>
            Hi, I'm Shraddha Bagrodia. I'm a software engineer at  <a target="_blank" href="https://www.goforward.com/">Forward</a>.
        </p>
        <p>
            You can reach me at <a id="email" href="mailto:shraddha.a11ys@gmail.com">shraddha.a11ys@gmail.com</a>.
        </p>
        <p>
            You can also find me on <a href="https://www.linkedin.com/in/shraddhabagrodia/" target="_blank">LinkedIn</a> and <a href="https://twitter.com/shraddha_rb" target="_blank">Twitter</a>.
        </p>    
    </section>
    <Link to="/">See Articles</Link>
  </Layout>
)

export default About
