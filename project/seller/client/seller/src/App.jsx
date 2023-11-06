import React from 'react'
import Profile from './Profile'
import Login from './Login'
import Signup from './Signup'
// import Cards from './Cards'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// import { cardimages } from './images'



const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>



      {/* <Signup/>
      <Login/> */}
      {/* <Profile/>  */}
      {/* <Cards/> */}
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </div>
  )
}

export default App