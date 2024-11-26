import React from 'react'

export default function ToDoData({ formData, setFormData }) {

    const removeData = (index) => {
        if(confirm('Are you sure you want to delete ?')){
            formData.splice(index,1);
        const finalData = [...formData];
        setFormData(finalData);
        console.log(formData);
        }
        
    }
  return (
    <div class="row" id="todo-container">
        {
            formData.map((v,i) => {
                return(
                    <div class="col col-12 p-2 todo-item" todo-id="1">
                        <div class="input-group">
                            <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value={v.task}/>
                            <div class="input-group-append">
                                <button todo-id="1" onClick={() => removeData(i)} class="btn btn-outline-secondary bg-danger text-white" type="button" id="button-addon2 ">X</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}
