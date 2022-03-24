import React from "react"
import Home from "../components/Home"


export default function Homepage() {

  const data = {
    home: {
      oneUp: {
        image: {
          src: "https://images.unsplash.com/photo-1603629406262-dd1f961273f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          alt: "flower"
        },
      },
      list: {
        items: [
          {
            heading: "Want to try something new together?",
            body: "Lets get started.",
            button: "Create now",
          },
        ]
      },

      threeUp: [  
        {
          image: {
            src: "https://thumbnails.production.thenounproject.com/B2C16BR4WIEfKiW7Bc9QuZYExI4=/fit-in/1000x1000/photos.production.thenounproject.com/photos/921AB49F-C5EB-43D3-8F14-6CCA6628C8F7.jpg",
            alt: "icecream"
          },
          eyebrow: "Solutions",
          title: "TopView",
          body: "Greet your audience as soon as they open the app with placements that show up before any other content.",
          button: "Create now",
        },
        {
          image: {
            src: "https://thumbnails.production.thenounproject.com/1PUZr344pmemQ_EN1CuCBSHjUUs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/E577017E-405A-475D-9DF9-0AACFCF7F107.jpg",
            alt: "icecream"
          },
          eyebrow: "Solutions",
          title: "In-Feed Ads",
          body:"Reach users in their feeds alongside native TikTok content with fully immersive ads.",
          button: "Create now",
        },
        {
          image: {
            src: "https://thumbnails.production.thenounproject.com/OPErbEDuKjPYHec7Ds1aIkFXFPQ=/fit-in/1000x1000/photos.production.thenounproject.com/photos/DD53C344-3166-426F-9518-F65B12D24A2C.jpg",
            alt: "icecream"
          },
          eyebrow: "Solutions",
          title: "Branded Hashtag Challenge",
          body: "Engage with the TikTok community by starting a new trend using a hashtag bespoke to your brand.",
          button: "Create now",
        },
      ],


  }  
    
};


  return (
    <main>
       <Home data={data.home} />  
    </main>
  )
}