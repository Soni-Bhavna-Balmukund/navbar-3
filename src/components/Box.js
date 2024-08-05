import "./Box.css"
import { BoxData } from "./BoxData"

import React from 'react'

const Box = () => {
  return (
    <div className="box6 pt-100">
      {BoxData.map((item,index) => {
        return(
          <div className="box" key={index}>
          <div>
              <img src={item.url} alt="" className="img"/>
          </div>
          <div>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
          </div>
      </div>
        )
      })}
   
    </div>
  )
}

export default Box