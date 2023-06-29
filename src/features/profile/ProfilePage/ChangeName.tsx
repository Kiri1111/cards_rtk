import React, {ChangeEvent, FC, memo, useState} from 'react';
import style from "./Profile.module.scss";
import editName from "../../../common/ui/images/editName.png";

type ChangeNamePropsType = {
	userName: string
	callBack: (value: string) => void
}

export const ChangeName: FC<ChangeNamePropsType> = memo(({userName, callBack}) => {
	const [editeMode, setEditeMode] = useState(false)
	const [value, setValue] = useState(userName)
	const imgClickHandler = () => {
		setEditeMode(true)
		setValue('')
	}

	const onBlurHandler = () => {
		setEditeMode(false)
		callBack(value)
	}

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	return (
		<div>
			{
				editeMode
					? <input onChange={onChangeInputHandler} value={value} placeholder={'Enter new Name'}
							 onBlur={onBlurHandler} autoFocus/>
					: <div className={style.nameText}>
						Имя: {value}
						<img
							onClick={imgClickHandler} alt={'change name'}
							src={editName} className={style.changeNameIcon}
						/>
					</div>
			}


		</div>
	);
})

