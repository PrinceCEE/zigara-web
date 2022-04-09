import React, { useState, useRef } from "react";
import { BsEye } from "react-icons/bs";
const Input = ({
  type,
  placeholder,
  error,
  onChange,
  onClick,
  name,
  icon,
  onPasswordToggle,
  value,
}) => {
  return (
    <div className="border flex items-center justify-end">
      <input
        type={type}
        className="border-none px-2 py-2 w-full rounded-xl focus:outline-none focus:border-gray-300"
        placeholder={placeholder}
        error={error}
        onChange={onChange}
        name={name}
        onClick={onClick}
        value={value}
      />
      {icon && (
        <span
          className="px-4 flex items-center justify-center"
          onClick={onPasswordToggle}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
