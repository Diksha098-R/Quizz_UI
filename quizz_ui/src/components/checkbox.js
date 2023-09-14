import React, {useState, useEffect} from "react";

export default function CheckboxGroup(props) {
  const [value, setvalue] = useState(false);

  useEffect(() => {
    props.checkboxClickedAt(value)
  }, [value])
  
  return (
    <>
      <input
        className="checkbox-input"
        onChange={() => {
          setvalue(!value)
        }}
        type="checkbox"
        name={props.option}
        value={value}
        checked={props.checked}

      />
      {props.option}
      </>
      )
}