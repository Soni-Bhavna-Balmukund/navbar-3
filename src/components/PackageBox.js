import React from 'react'
import "./PackageStyles.css";
import PackageData from "./PackageData"
import PackageContainer from './PackageContainer';
// import PackageData from './PackageData';

// const PackageBox = ({ title, price, features }) => {


    /*   // const PackageBox = ({ title, price, features }) => {
 
   // console.log('Props:', title, price, features);
 
     // if (!title || !price || !features) {
     //     return <div>Error: Missing props</div>;
     //   }
     
     //   if (!Array.isArray(features)) {
     //     return <div>Error: Features is not an array</div>;
     //   }*/

    // let tt = ["First","second","Third"];
    // let num =["$99","$90","$56"];
    //    console.log(PackageData);
    //    console.log(LiData);
    // return (
        // <div className='py-70 box3'  >
        {/* 
{PackageData.map((item,index) =>{
        return(
            <div className='pacbox' id='package' key={index}>
            <div><h2 className='brown p-2'>{item.title}</h2></div>
            <div className='gray p-2 text-white fw-700'><span className='fs-60'>{item.number}</span><span>99</span></div>
           
                {LiData.map((f,i) =>{
                    return(
                        <div >
                <ul key={i}>
                    
                     <li>{f.li1}</li>
                    <li>{ f.li2}</li>
                    <li>{f.li3}</li>
                    <li>{f.li4}</li>
                    <li>{f.li5}</li> 
                

                </ul>
            </div>
)})}
                <button type="button" className='brown text-white '>START NOW</button>
        </div>
        )
    }
    )}
        */}
const PackageBox = ({ title, price, features }) => {
    console.log('Props:', title, price, features);
    return (

        <div className="pacbox" id="package">
            <div>
                <div><h2 className='brown p-2' >{title}</h2></div>
                <div className='gray p-2 text-white fw-700'><span className='fs-60'>{price}</span><span>99</span></div>


                <div >
                    <ul>
{/* 
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li> */}
                        {features.map((feature,index) =>(
                            <li key={index}>{feature}</li>
                        ))}


                    </ul>
                </div>
                <button type="button" className='brown text-white '>START NOW</button>
            </div>
        </div>

            )}
//         )
//         }
// }
export default PackageBox;




