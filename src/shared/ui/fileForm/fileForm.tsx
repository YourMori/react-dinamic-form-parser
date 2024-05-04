import { useState } from 'react';
import './fileForm.scss';

interface IFileForm {
	type: string;
	label?: string;
	required?: boolean;
	formats?: string;
	max_size?: number;
	max_count?: number;
}

export const FileForm: React.FC<IFileForm> = ({ type, label, required, formats, max_count, max_size }) => {
	const [isLoading, setIsLoading] = useState(false);

	const onChangeFileForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
	};

	return (
		<div className='fileForm'>
			<div className='fileForm__info'>
				<div className='fileForm__select'>
					<label className='fileForm__link' htmlFor='fileFormInput'>
						{label}
					</label>
					<input
						className='fileForm__input'
						id='fileFormInput'
						type={type}
						required={required}
						accept={formats}
						max={max_count}
						maxLength={max_size}
						onChange={onChangeFileForm}
					></input>
					<span> or drag in form</span>
				</div>
				<p>PNG, jpg, gif files up to 10 MB in size are available for download</p>
			</div>
			{isLoading && <img src='../../src/shared/assets/images/file-uploaded.png'></img>}
		</div>
	);
};
