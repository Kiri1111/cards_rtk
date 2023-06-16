import React, {FC} from 'react';
import preloader from '../images/spinner.gif'

type PreloaderWidthType = {
	width: string
}

export const Preloader: FC<PreloaderWidthType> = ({width}) => {
	return (
		<div>
			<img alt={'Preloader'} style={{width: width}} src={preloader}/>
		</div>
	);
};
