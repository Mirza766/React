import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
//   const [data, setData] = useState({});
const data=useLoaderData()
//   useEffect(() => {
//     fetch('https://api.github.com/users/Mirza766')
//       .then(response => response.json())  // <- fixed here
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => console.error('Error fetching GitHub data:', error));
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers: {data.followers !== undefined ? data.followers : 'Loading...'}
      <img src={data.avatar_url} alt="Git picture" width={300}></img>
    </div>
  );
}

export default Github;


export const githubInfoLoader=async ()=>{
     const response=await fetch('https://api.github.com/users/Mirza766')
    return response.json()
}