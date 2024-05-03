import './mainPage.scss';
import { FileLoader } from '@/entites/FileLoader';

import { DynamicParser } from '@/widgets/dynamicParser';

export const MainPage = () => {
	return (
		<div className='main'>
			<div className='main__header'>
				<FileLoader />
			</div>
			<div className='main__section'>
				<DynamicParser />
			</div>
		</div>
	);
};
