import React from 'react';
import { useFileStore } from '@/entites/FileLoader';
import './modal.scss';

export const Modal = () => {
	const { resetData, isLoading, openModal, modal_opened } = useFileStore();

	const closeForm = () => {
		openModal(false);
	};

	const onCancel = () => {
		openModal(false);
	};

	const onReset = () => {
		resetData();
		isLoading(false);
		openModal(false);
	};

	if (!modal_opened) {
		return <></>;
	}

	return (
		<div className='modal'>
			<h2 className='modal__title'>Do you want reset?</h2>
			<div className='modal__buttons'>
				<button className='button' onClick={onReset}>
					Reset
				</button>
				<button className='button' onClick={onCancel}>
					Cancel
				</button>
			</div>

			<button className='modal__btn' onClick={closeForm}>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M6.33496 16.0462C5.88802 16.4931 5.88802 17.2177 6.33496 17.6647C6.78189 18.1116 7.50652 18.1116 7.95346 17.6647L11.9998 13.6183L16.0463 17.6648C16.4932 18.1118 17.2179 18.1118 17.6648 17.6648C18.1117 17.2179 18.1117 16.4933 17.6648 16.0463L13.6183 11.9998L17.6645 7.95367C18.1114 7.50673 18.1114 6.78211 17.6645 6.33517C17.2175 5.88824 16.4929 5.88824 16.046 6.33517L11.9998 10.3813L7.95379 6.33533C7.50685 5.88839 6.78223 5.88839 6.33529 6.33533C5.88835 6.78226 5.88835 7.50689 6.33529 7.95382L10.3813 11.9998L6.33496 16.0462Z'
						fill='white'
					/>
				</svg>
			</button>
		</div>
	);
};
