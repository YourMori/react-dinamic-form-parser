import React from 'react';
import './color.scss';

interface IColor {
	type: string;
	label: string;
	required: boolean;
}

export const Color: React.FC<IColor> = ({ type, label, required }) => {
	return (
		<div className='color'>
			<div className='color__block'>
				<input type={type} required={required}></input>
			</div>
			<label htmlFor='colors'>{label}</label>
		</div>
	);
};
