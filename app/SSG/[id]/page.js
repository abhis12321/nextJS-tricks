import React from 'react'

export default async function page({ params }) {
    console.log(params);
    
  return (
    <div>
      hello {params?.id}
      <p className="">{Date.now()}</p>
    </div>
  )
}


// export async function getStaticPaths() {
//     return {
//         paths:[{params:"1"} , {params:"2"} , {params:"3"} , {params:"4"} , ],
//         fallback:false,
//     }
// }

export async function generateStaticParams() {
    return [
        {id:"1", name:"abhishek-singh"},
        {id:"2", name:"abhishek-singh"},
        {id:"3", name:"abhishek-singh"},
        {id:"4", name:"abhishek-singh"},
    ]
}


// export async function getStaticProps({ params }) {
//   const { id } = params;
// //   const res = await fetch(`https://api.example.com/${slug}`);
// //   const data = await res.json();
//   return {
//     props: {
//       title: "data.title" + id,
//       content: "data.content" + id,
//     },
//   };
// }

// export default function BlogPost({ title, content }) {
//   // Use the fetched data in your component
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{content}</p>
//     </div>
//   );
// }