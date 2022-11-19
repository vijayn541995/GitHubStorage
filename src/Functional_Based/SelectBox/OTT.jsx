import React, { useState } from "react";

const OTT=()=>{
let [OTT,setOTT]= useState({
        "android": {
          "category1": [
            "oppo",
            "redmi"
          ],
          "category2": [
            "samsung",
            "lenovi"
          ]
        }});


      let handleChange=()=>{
        
      }
    return(
        <React.Fragment>
            <h1>Select Box </h1>

            <section className="Main-Select-Box">
              <select name="" id="">
                <option className='OTT-Dropdown' value='' onClick={handleChange}>OTT</option>

                <option className='OTT-Dropdown' value="">Cat-1</option>
                <option className='OTT-Dropdown' value="">Cat-2</option>
                <option className='OTT-Dropdown' value="">Cat-3</option>
                
                <option value="">OTT</option>
              </select>
            </section>
        </React.Fragment>
    )

}
export default OTT;