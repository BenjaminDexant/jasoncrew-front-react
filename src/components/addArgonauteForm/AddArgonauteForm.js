import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './styles/addArgonauteForm.css';

const AddArgonauteForm = ({ proxy }) => {
    const { register, handleSubmit } = useForm();

    const addArgonaute = (data) => {
        const { name } = data;
        if (window.confirm('Are you sure you wish to add this guy?')) {
            axios
                .post(`${proxy}/add`, {
                    name,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="addArgonauteForm-container">
            <h2>Ajouter un(e) Argonaute</h2>
            <form onSubmit={handleSubmit(addArgonaute)}>
                <input name="Name" {...register('value_name')} placeholder="Charalampos" />
                <input type="submit" value="Engagé!" />
            </form>
        </div>
    );
};

export default AddArgonauteForm;
