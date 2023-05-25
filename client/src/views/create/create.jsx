import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTypes } from '../../redux/actions';
import axios from 'axios';

import style from './create.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Create() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.Types);

    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    const [form, setForm] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: ""
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        validate({ ...form, [property]: value });

    }

    const validate = (form) => {
        let newErrors = errors;
        if (/^[a-z ,.'-]+$/i.test(form.name)) {
            newErrors = { ...newErrors, name: "" }
        } else {
            newErrors = { ...newErrors, name: "El campo Nombre esta vacio" };
        }
        if (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(form.image)) {
            newErrors = { ...newErrors, image: "" }
        } else {
            newErrors = { ...newErrors, image: "El campo Imagen esta vacio" };
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.hp)) {
            newErrors = { ...newErrors, hp: "" }
        } else {
            newErrors = { ...newErrors, hp: "El campo HP debe ser numerico entre 0 y 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.attack)) {
            newErrors = { ...newErrors, attack: "" }
        } else {
            newErrors = { ...newErrors, attack: "El campo Ataque debe ser numerico entre 0 y 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.defense)) {
            newErrors = { ...newErrors, defense: "" }
        } else {
            newErrors = { ...newErrors, defense: "El campo Defensa debe ser numerico entre 0 y 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.speed)) {
            newErrors = { ...newErrors, speed: "" }
        } else {
            newErrors = { ...newErrors, speed: "El campo Velocidad debe ser numerico entre 0 y 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.weight)) {
            newErrors = { ...newErrors, weight: "" }
        } else {
            newErrors = { ...newErrors, weight: "El campo Peso debe ser numerico entre 0 y 100" }
        }
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.height)) {
            newErrors = { ...newErrors, height: "" }
        } else {
            newErrors = { ...newErrors, height: "El campo Altura debe ser numerico entre 0 y 100" }
        }
        setErrors(newErrors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons", { ...form, types: selectedTypes })
            .then(res => alert("Pokemon created!"))
            .catch(err => alert(err))
    }

    return (
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.formTitle} >
                <label className={style.label} >Nombre: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" className={style.formImput} />
                <span className={style.span}>{errors.name}</span>
            </div>
            <div className={style.formTitle}>
                <label className={style.label} >Imagen: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" className={style.formImput}/>
                <span className={style.span}>{errors.image}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >HP: </label>
                <input type="text" value={form.hp} onChange={changeHandler} name="hp" className={style.formImput}/>
                <span className={style.span}>{errors.hp}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >Ataque: </label>
                <input type="text" value={form.attack} onChange={changeHandler} name="attack" className={style.formImput}/>
                <span className={style.span}>{errors.attack}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >Defensa: </label>
                <input type="text" value={form.defense} onChange={changeHandler} name="defense" className={style.formImput}/>
                <span className={style.span}>{errors.defense}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >Velocidad: </label>
                <input type="text" value={form.speed} onChange={changeHandler} name="speed" className={style.formImput}/>
                <span className={style.span}>{errors.speed}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >Peso: </label>
                <input type="text" value={form.weight} onChange={changeHandler} name="weight" className={style.formImput}/>
                <span className={style.span}>{errors.weight}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label} >Altura: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="height" className={style.formImput}/>
                <span className={style.span}>{errors.height}</span>
            </div>

            <div className={style.formTitle}>
                <label className={style.label}>Elegir Tipos:</label>
                <div>
                    {types.map((type) =>
                        <div key={type.id}>
                            <p className={style.label}>{type.name}</p>
                            <input className={style.checkbox} type="checkbox" name={`type-${type.id}`}
                                checked={selectedTypes.some(t => t.id === type.id)}
                                onChange={(e) => {
                                    if (selectedTypes.some(t => t.id === type.id)) {
                                        setSelectedTypes(selectedTypes.filter(t => t.id !== type.id));
                                    } else if (selectedTypes.length < 2) {
                                        setSelectedTypes([...selectedTypes, type]);
                                    } else {
                                        setSelectedTypes([selectedTypes[1], type]);
                                    }
                                }} />
                        </div>
                    )}
                </div>
            </div>

            <button className={style.button} type="submit" disabled={
                form.name === "" ||
                errors.name !== "" ||
                errors.image !== "" ||
                errors.hp !== "" ||
                errors.attack !== "" ||
                errors.defense !== "" ||
                errors.speed !== "" ||
                errors.weight !== "" ||
                errors.height !== "" ||
                selectedTypes.length === 0
            }>SUBMIT</button>

            <Link to='/home'>
                <button className={style.button} >BACK TO HOME</button>
            </Link>

        </form>
    )
}

export default Create;
