import { useFileStore } from '@/entites/FileLoader';
import './file.scss';
import { useState } from 'react';

interface IFile {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const File: React.FC<IFile> = ({ onChange }) => {
	const { file_uploaded } = useFileStore();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			onChange(event);
		}
	};

	return (
		<div className='file'>
			<div className='file__info'>
				<div className='file__select'>
					<label className='file__link' htmlFor='fileInput'>
						Choose file
					</label>
					<input className='file__input' type='file' id='fileInput' accept='.json' onChange={handleFileChange}></input>
					<span> or drag in form</span>
				</div>
				<p>PNG, jpg, gif files up to 10 MB in size are available for download</p>
			</div>
			{file_uploaded && <img src='../../src/shared/assets/images/file-uploaded.png'></img>}
		</div>
	);
};
