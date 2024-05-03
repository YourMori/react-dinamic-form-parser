import React, { useEffect, useRef } from 'react';
import './checkbox.scss';

interface ICheckbox {
	type: string;
	label?: string;
	required?: boolean;
}

export const Checkbox: React.FC<ICheckbox> = ({ type, label, required }) => {
	const checkboxLabel = useRef<HTMLLabelElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
		event.preventDefault();
		if (checkboxLabel.current && checkboxLabel.current.classList) {
			checkboxLabel.current.classList.toggle('checked');
		}
	};

	return (
		<div className='checkbox'>
			<input type={type} required={required} id='checkboxInput'></input>
			<label className='checkbox-custom' htmlFor='checkboxInput' ref={checkboxLabel} onClick={handleClick}></label>
			<label className='checkbox-label'>{label}</label>
		</div>
	);
};
