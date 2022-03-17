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
            title: "Want to try something new together?",
            body: "Lets get started.",
            button: "Create now",
          },
        ]
      },
    }
  };


  return (
    <main>
       <Home data={data.home} />  
    </main>
  )
}