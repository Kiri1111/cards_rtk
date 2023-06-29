import React, {FC, ReactNode} from 'react';
import s from './modal.module.scss'

type ModalPropsType = {
	title: string
	children: ReactNode
}
export const Modal: FC<ModalPropsType> = ({title, children}) => {
	return (
		<div className={s.modalPage}>
			<div className={s.modal}>
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	);
};

