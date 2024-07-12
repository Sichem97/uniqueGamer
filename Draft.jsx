import React from 'react'
export default function Draft() {
  const data = JSON.parse(localStorage.getItem("users"))
  console.log(data);
  const oo = data.filter((value)=> value.pseudo ==="shekinah")
  
  
  console.log("ooo is " + oo);
  return (
    <div>
      
    </div>
  )
}