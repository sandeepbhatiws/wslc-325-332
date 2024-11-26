import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoData from './ToDoData'

export default function Home() {

    const [formData, setFormData] = useState([]);
  return (
        <>
            <div class="container">
                <div class="row justify-content-center align-items-center main-row">
                    <div class="col shadow main-col bg-white">
                        <div class="row bg-primary text-white">
                            <div class="col  p-2">
                                <h4>Todo App</h4>
                            </div>
                        </div>
                        
                        <ToDoForm formData={ formData } setFormData = {setFormData}/>

                        <ToDoData formData={ formData } setFormData = {setFormData}/>
                    </div>
                </div>
            </div>
        </>
  )
}
