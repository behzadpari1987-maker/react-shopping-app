import {faClose}from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
export const Welcome=(()=>{
const [showWelcome,setShowWelcome]=useState(true);
useEffect(()=>{
    const data=localStorage.getItem('show_app_into')
    setShowWelcome(JSON.parse(data)??true)

},[])

const onHideWelcome=()=>{
    setShowWelcome(false);
localStorage.setItem('show_app_into',JSON.stringify(false))
}
    return(
 <React.Fragment>

{showWelcome&&<div className='container'>
 <div className='bg-primary text-white my-3'>

<FontAwesomeIcon
onClick={onHideWelcome}
icon={faClose}
className='welcome-close'/>

<div className='p-4'>Welcome</div>
 </div>
</div>}

</React.Fragment>


    )
})