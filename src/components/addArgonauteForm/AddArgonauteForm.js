import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './styles/addArgonauteForm.css';

const AddArgonauteForm = ({ proxy, add, setAdd }) => {
    const { register, handleSubmit } = useForm();

    const addArgonaute = (data) => {
        const { name } = data;
        if (window.confirm('Vous êtes sûr de vouloir engager cet homme?')) {
            axios
                .post(`${proxy}/argonautes/add`, {
                    name,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setAdd(!add);
    };

    return (
        <div className="addArgonauteForm-container">
            <h2>Ajouter un(e) Argonaute</h2>
            <form onSubmit={handleSubmit(addArgonaute)}>
                <input name="Name" {...register('name')} placeholder="Charalampos" />
                <input type="submit" value="Engager" />
            </form>
        </div>
    );
};

export default AddArgonauteForm;
