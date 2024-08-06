import React from 'react'
import PackageData from './PackageData'


function PackageBox() {

  const data =  PackageData;


  return (
    <div>

        <div className="main">
        {
            data.map((item)=>{

                return <div className='box'>

                    <h1>{item.title}</h1>
                    <span>{item.price}</span>
                    <ul>
                        
                        {item.features.map((v)=>{
                            return <li>
                                {v}
                            </li>
                        })}
                    </ul>
                    </div>

            })
        }

        </div>

    </div>
  )
}

export default PackageBox