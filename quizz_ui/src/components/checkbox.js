import React, {useState, useEffect} from "react";

export default function CheckboxGroup(props) {
  const [value, setvalue] = useState(props.checked);

  useEffect(() => {
    setvalue(props.checked)
  }, [props.checked])
  
  return (
    <>
      <input
        key={props.option}
        className="checkbox-input"
        onChange={() => {
          let oldVal = !value;
          setvalue(oldVal)
          props.checkboxClickedAt(oldVal)
        }}
        type="checkbox"
        name={props.option}
        value={value}
        checked={value}

      />
      {props.option}
      </>
      )
}