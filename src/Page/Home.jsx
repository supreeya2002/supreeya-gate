import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import MyButton from '../MyButton'


const Home = () => {
  return (
   <>
   <MainLayout>
   <div className="mt-4 p-5 bg-success text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="test" color="primary"/>
      <MyButton text="test" color="danger"/>
      <MyButton text="test" color="info"/>
      <MyButton text="test" color="warning"/>

   </MainLayout>
   <MyButton />
   </>
  )
}
 
export default Home