import React, { useState } from "react";

const Android=()=>{
let [Android,setAndroid]= useState({
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
                <option className='Android-Dropdown' value='' onClick={handleChange}>Android</option>

                <option className='OTT-Dropdown' value="">Cat-1</option>
                <option className='OTT-Dropdown' value="">Cat-2</option>
                <option className='OTT-Dropdown' value="">Cat-3</option>
                
                <option value="">OTT</option>
              </select>
            </section>
        </React.Fragment>
    )

}
export default Android;