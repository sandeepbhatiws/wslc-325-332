import React, { useRef } from 'react'

export default function ToDoForm({formData, setFormData}) {

    const toDoTitle = useRef();
    const toDoDescription = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        // const data = {
        //     task : event.target.todo_input.value
        // }

        const data = {
            task : toDoTitle.current.value
        }
        
        const finalData = [data, ...formData];
        setFormData(finalData);
        
        // event.target.todo_input.value = '';
        event.target.reset();
    }

  return (
    <form onSubmit={submitHandler} autoComplete='off'>
        <div class="row justify-content-between text-white p-2">
            <div class="form-group flex-fill mb-2">
                <input id="todo-input" name='todo_input' type="text" class="form-control" ref={toDoTitle}/>
            </div>
            <button type="submit" class="btn btn-primary mb-2 ml-2">Save</button>
        </div>
    </form>
  )
}
