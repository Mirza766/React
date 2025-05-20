import React from 'react'

function Card({username="MirzaCodding",btnText="Kill me"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>
      <div className="absolute bottom-4 left-4 text-left z-10">
      <h2 className="text-lg font-semibold text-white">{username}</h2>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-blue-600">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card
