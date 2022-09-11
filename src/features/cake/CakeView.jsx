import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
    //useSelector se usa para traer los datos del store
    const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
    //useDispatch se usa para hacer / usar el action que tengo en lops slice
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
        </div>
    );
}

export default CakeView;
