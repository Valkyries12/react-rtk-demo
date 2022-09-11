import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";


//Se recomienda que la store tenga valores justo y necesario. Por ejemjplo un valor que puede elegir el usuario,
// deberia de quedarse dentro del estado del componente y no en la store
const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIcecream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream - {numberOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icrecream
      </button>
    </div>
  );
};

export default IceCreamView;
