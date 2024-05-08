import React from 'react'

export const Input = ({label, labelClassname, id, name, type, value, onChange, inputClassName}:any) => {
  return (
    <div>
      <label htmlFor={id} className={labelClassname}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
          className={inputClassName}
        />
      </div>
    </div>
  );
}
