import React, {FC} from 'react';
import preloader from '../images/spinner.gif'

type PreloaderWidthType = {
	width: string
}

export const Preloader: FC<PreloaderWidthType> = ({width}) => {
	return (
		<div style={{position: 'relative', top: '30%', width: '100%'}}>
			<img alt={'Preloader'} style={{width: width}} src={preloader}/>
		</div>
	);
};
