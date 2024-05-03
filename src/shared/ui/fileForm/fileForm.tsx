import { useState } from 'react';
import './fileForm.scss';

export const FileForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onChangeFileForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
	};

	return (
		<div className='fileForm'>
			<div className='fileForm__info'>
				<div className='fileForm__select'>
					<label className='fileForm__link' htmlFor='fileFormInput'>
						Choose file
					</label>
					<input className='fileForm__input' type='file' id='fileFormInput' onChange={onChangeFileForm}></input>
					<span> or drag in form</span>
				</div>
				<p>PNG, jpg, gif files up to 10 MB in size are available for download</p>
			</div>
			{isLoading && <img src='../../src/shared/assets/images/file-uploaded.png'></img>}
		</div>
	);
};
