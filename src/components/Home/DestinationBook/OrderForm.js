import React from 'react';
import { useForm } from 'react-hook-form';
import './DestinationBook.css';

const OrderForm = ({ destinationName }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const eventData = {
            Name: data.name,
            email: data.email,
            destinationName: data.destinationName,
        }
        const url = `http://localhost:5000/addOrder`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };
    return (
        <div>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="formStyle">
                    <input defaultValue="" placeholder='Enter your name' {...register("name")} />

                    <input defaultValue="" placeholder='Enter your email' {...register("email")} />

                    <input defaultValue={destinationName} {...register("destinationName")}/>

                    <input className='s-btn' type="submit" />
                </div>

            </form>
        </div>
    );
};

export default OrderForm;