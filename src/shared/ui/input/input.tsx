import React, { useEffect, useRef, useState } from 'react';
import './input.scss';

interface IInput {
	type: string;
	label?: string;
	required?: boolean;
	placeholder?: string;
	maxlength?: number;
	minlength?: number;
	pattern?: string;
	mask?: string;
}

export const Input: React.FC<IInput> = ({ type, label, required, placeholder, maxlength, minlength, pattern, mask }) => {
	return (
		<div className='input'>
			<input
				type={type}
				placeholder={placeholder}
				required={required}
				minLength={minlength}
				maxLength={maxlength}
				pattern={pattern}
			></input>
			<label>{label}</label>
		</div>
	);
};
