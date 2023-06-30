import React, {FC, ReactNode} from 'react';
import s from './modal.module.scss'

type ModalPropsType = {
	title: string
	children: ReactNode
	setView: (value: boolean) => void
}
export const Modal: FC<ModalPropsType> = ({title, children, setView}) => {

	const closeModalHandler = () => setView(false)
	return (
		<div onClick={closeModalHandler} className={s.modalPage}>
			<div onClick={e => e.stopPropagation()} className={s.modal}>
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	);
};

