import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTypes } from '../../redux/actions';
import axios from 'axios';

import style from './create.module.css';


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
        if (/^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/.test(form.life)) {
            newErrors = { ...newErrors, life: "" }
        } else {
            newErrors = { ...newErrors, life: "El campo HP debe ser numerico entre 0 y 100" }
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
            <div>
                <label>Nombre: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
                <span>{errors.image}</span>
            </div>

            <div>
                <label>HP: </label>
                <input type="text" value={form.hp} onChange={changeHandler} name="hp" />
                <span>{errors.hp}</span>
            </div>

            <div>
                <label>Ataque: </label>
                <input type="text" value={form.attack} onChange={changeHandler} name="attack" />
                <span>{errors.attack}</span>
            </div>

            <div>
                <label>Defensa: </label>
                <input type="text" value={form.defense} onChange={changeHandler} name="defense" />
                <span>{errors.defense}</span>
            </div>

            <div>
                <label>Velocidad: </label>
                <input type="text" value={form.speed} onChange={changeHandler} name="speed" />
                <span>{errors.speed}</span>
            </div>

            <div>
                <label>Peso: </label>
                <input type="text" value={form.weight} onChange={changeHandler} name="weight" />
                <span>{errors.weight}</span>
            </div>

            <div>
                <label>Altura: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="height" />
                <span>{errors.height}</span>
            </div>

            <div className={style.typesContainer}>
                <label>Elegir Tipos</label>
                <div className={style.types}>
                    {types.map((type) =>
                        <div key={type.id} className={style.type}>
                            <p className={style.typeName}>{type.name}</p>
                            <input type="checkbox" name={`type-${type.id}`}
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
            
        </form>
    )
}

export default Create;
