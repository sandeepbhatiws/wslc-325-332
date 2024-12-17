import React from 'react'
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
  } from "flowbite-react";

  import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';
import { toast } from 'react-toastify';

export default function AddQuiz() {

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            question : event.target.question.value,
            option_1 : event.target.option_1.value,
            option_2 : event.target.option_2.value,
            option_3 : event.target.option_3.value,
            option_4 : event.target.option_4.value,
            answer : event.target.answer.value,
        }

        const db = getDatabase(app);
        set(ref(db, 'quizzes/'+Date.now()), formData);

        toast.success('Quiz added successfully !!');

        event.target.reset();
    }

  return (
        <>
            <form onSubmit={ submitHandler } className="flex max-w-[1200px] m-auto flex-col p-8 gap-4" autoComplete='off'>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="question" value="Question" />
                    </div>
                    <TextInput name='question' id="question" type="text" placeholder="Question" required />
                </div>

                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="OptionA" value="Option A" />
                    </div>
                    <TextInput name='option_1' id="OptionA" type="text" placeholder="Option A" required />
                </div>

                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="OptionB" value="Option B" />
                    </div>
                    <TextInput name='option_2' id="OptionB" type="text" placeholder="Option B" required />
                </div>

                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="OptionC" value="Option C" />
                    </div>
                    <TextInput name='option_3' id="OptionC" type="text" placeholder="Option C" required />
                </div>

                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="OptionD" value="Option D" />
                    </div>
                    <TextInput name='option_4' id="OptionD" type="text" placeholder="Option D" required />
                </div>

                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Select Answer" />
                    </div>
                    <Select name='answer' id="countries" required>
                        <option value="">Select Answer</option>
                        <option value="Option A">Option A</option>
                        <option value="Option B">Option B</option>
                        <option value="Option C">Option C</option>
                        <option value="Option D">Option D</option>
                    </Select>
                    </div>

                <Button type="submit">Submit</Button>
                </form>
        </>
  )
}
