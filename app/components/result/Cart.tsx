import { useState, type FC } from "react";
import type { FormDataSliceState } from "~/types/types";

interface CartProps {
  data: FormDataSliceState;
  activ: boolean;
}

const Cart: FC<CartProps> = ({data, activ}) => {
  const [isActiv, setIsActiv] = useState(activ);
  const runAcive = () => setTimeout(() => setIsActiv(false), 2500);
  if(activ) runAcive();

  return (
    <div className={isActiv ? "p-4 border border-gray-300 rounded-lg bg-amber-200" : "p-4 border border-gray-300 rounded-lg"}>
      <p>{data.name}</p>
      <p>{data.age}, {data.gender}</p>
      <p>{data.email}</p>
      <p>{data.password}</p>
      <p>{data.country}</p>
      <img
        src={data.picture}
        alt="Uploaded"
        className="w-22 h-30 object-cover my-2"
      />
    </div>
  )
}

export default Cart;
