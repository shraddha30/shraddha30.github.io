import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Sources from "../components/sources"
import googleA11y from '../images/google-a11y.png'
import psaStayHome from '../images/psa-stay-home.png'
import igMk from '../images/ig-mk.png'
import changePP from '../images/change-pp.png'
import goToProfile from '../images/go-to-profile-a11y.png'
import wikiLink from '../images/wiki-a11y.png'

const SecondPage = () => (
  <Layout>
    <h2>Text Alternatives for Images</h2>
    <section>
      <h4>What are text alternatives for images and why do we need them?</h4>
      <p>A text alternative is a description of an image. In a web page it is expressed through an alt property on an image tag.</p>
      <p>Most web applications today use images to display different types of information such as logos, links, content etc. Text alternatives allow for these images to be accessible by users who are visually impaired. They are also useful for users with poor internet connections who might be unable to download and view these images on a webpage.</p>
    </section>
    
    <section>
      <h4>What happens when no text alternatives are provided?</h4>
      <p>If the text alternative is not provided, the screen reader will read out the <b>src</b> attribute's value.</p>
      <h6>Example:</h6>
      <pre>
        <code>
            &lt;img class="profile-picture" src="https://scontent-sjc3-1.cdninstagram.com" /&gt;
        </code>
      </pre>
      <p>Here, the screen reader will read out "http://scontent-sjc3-1.cdninstagram.com"</p>
    </section>
      
    <section>
      <h4>What are text alternatives for images?</h4>
      <p>For &lt;img /&gt; tag, text alternatives can be provided by using the <b>alt</b> attribute.</p>
      <h6>Example from Google's website:</h6>
      <img alt="Screenshot of Google homepage" src={googleA11y}/>
      <p>Corresponding code:</p>
      <pre>
          <code>
              &lt;img alt="Stay Home. Save Lives : Help Stop Coronavirus" src="/logos/doodles/2020/stay-home-save-lives-april-17-copy-6753651837108784-law.gif" style="padding-top:1px" /&gt;
          </code>
      </pre>  
    </section>
    
    <section>
      <h4>How to choose alt strings?</h4>
      <p>I like how <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt">MDN</a> describes it.</p>
      <p><i>"Think of it like this: When choosing alt strings for your images, imagine what you would say when reading the page to someone over the phone without mentioning that there's an image on the page."</i></p>
      <img alt="Screenshot of a picture posted on Instagram" src={igMk} height="500px"/>
      <p><i>Instagram makes use of machine learning to provide meaningful alt tags to user uploaded images</i></p>
      <p>I personally like to consider the following factors:</p>
      
      <h5>1. Does the image provide any actual information or is it decorative?</h5>
      <p>If it is purely decorative, setting alt = "" will let the screen reader know to skip over the image. </p>
      <h6>Example:</h6>
      <img alt="Screenshot of PSA for stay home save lives" src={psaStayHome}/>
      <pre>
          <code>
              &lt;img class="lqwrY" src="data:image/gif" alt="" /&gt;
          </code>
      </pre>
      <p>In this case, the image is not adding any additional content for a screen reader, so the alt property is set to an empty string.</p>
      <h5>2. What’s more important: the content of the image or its context?</h5>

      <p> Consider the same profile picture used in two different places on instagram:</p>
      <p>Here, when the image is used as a button for changing the profile picture, the img tag is:</p>
      <img alt="Screenshot of profile picture on instagram" src={changePP}/>
      <pre>
          <code>
              &lt;img alt="Change Profile Photo" class="be6sR" src="https://scontent-sjc3-1.cdninstagram.com/"&gt;
          </code>
      </pre>

      <p>Here, the same image is in the header.</p>
      <img alt="Screenshot of profile picture on instagram header" src={goToProfile} />
      <pre>
          <code>
              &lt;img alt="shraddha.b's profile picture" class="_6q-tv" src="https://scontent-sjc3-1.cdninstagram.com"&gt;
          </code>
      </pre>
    </section>
      
    <section>
      <h4>What is the behavior for images used as links?</h4>
      <p>Sometimes, images are wrapped inside of anchor tags and alt attribute is used to describe where the link will take the user.</p>
      <h6>Example:</h6>
      <img alt="Screenshot of an image link to audio page of wikipedia" src={wikiLink} />
      <pre>
          <code>
              &lt;a href="/wiki/File:Cheese.ogg" title="Listen to this article"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;img alt="Listen to this article" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sound-icon.svg/20px-Sound-icon.svg.png" /&gt;
                  <br />
              &lt;/a&gt;
          </code>
      </pre>  
    </section>
    
    {/* <Sources /> */}
    <div className="more-articles">
        <Link to="/">More Articles</Link>
    </div>
  </Layout>
)

export default SecondPage
