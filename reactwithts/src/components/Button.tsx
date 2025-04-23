// import { FC } from "react";

type ButtonShape = {
  label: string;
  onclick: () => void;
  disabled: boolean;
}

const Button = ({label, onclick, disabled} : ButtonShape) => {
  return (
    <button onClick={onclick} disabled={disabled}>{label}</button>
  )
}

export default Button