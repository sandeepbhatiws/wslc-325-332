import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../config/firebase';

export default function ViewQuiz() {

    const [getQuizes, setGetQuizes] = useState([]);


    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'quizzes');
        onValue(starCountRef, (data) => {
            var data = data.val();

            var quizFinalData = [];
            for(var quizData in data){
                quizFinalData.push(data[quizData]);
            }

            setGetQuizes([...quizFinalData]);
        });
    },[]);

    return (
        <>
            <div className="overflow-x-auto max-w-[1200px] m-auto p-8 ">
                <Table striped className='border'>
                    <Table.Head>
                    <Table.HeadCell width="50px">S.No</Table.HeadCell>
                        <Table.HeadCell>Question</Table.HeadCell>
                        <Table.HeadCell>Option A</Table.HeadCell>
                        <Table.HeadCell>Option B</Table.HeadCell>
                        <Table.HeadCell>Option C</Table.HeadCell>
                        <Table.HeadCell>Option D</Table.HeadCell>
                        <Table.HeadCell width="100px">Correct Answer</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            (getQuizes.length > 0) 
                            ?
                            
                            getQuizes.map((v,i) => {
                                return(
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>{ i+1 }</Table.Cell>
                                        <Table.Cell>{ v.question }</Table.Cell>
                                        <Table.Cell>{ v.option_1 }</Table.Cell>
                                        <Table.Cell>{ v.option_2 }</Table.Cell>
                                        <Table.Cell>{ v.option_3 }</Table.Cell>
                                        <Table.Cell>{ v.option_4 }</Table.Cell>
                                        <Table.Cell>{ v.answer }</Table.Cell>
                                    </Table.Row>
                                )
                            })
                            
                            :
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                                <Table.Cell colSpan="7">No Record Found !!</Table.Cell>
                            </Table.Row>
                        }

                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
