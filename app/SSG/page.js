import React from 'react'

export const revalidate = 10;

export default function page(props) {
  console.log(props);
  
  return (
    <div>
      SSG {Date.now().toLocaleString()}
    </div>
  )
}

// export async function getData() {
//   return {
//     props:{
//       name:"jack-sparrow"
//     }
//   }
// }