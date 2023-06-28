// import React, {ChangeEvent, FC, useRef} from 'react';
//
// type PropsType = {
// 	callBack: (file64: string) => void
// }
//
// export const InputTypeFile: FC<PropsType> = ({callBack}) => {
//
// 	const inputRef = useRef<HTMLInputElement>(null)
//
// 	const selectFileHandler = () => {
// 		inputRef && inputRef.current?.click();
// 	};
//
// 	const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		if (e.target.files && e.target.files.length) {
// 			const file = e.target.files[0]
// 			if (file.size < 4000000) {
// 				const reader = new FileReader();
// 				reader.onloadend = () => {
// 					const file64 = reader.result as string
// 					callBack(file64)
// 				}
// 				reader.readAsDataURL(file)
// 			} else {
// 				console.error('Error: ', 'Файл слишком большого размера')
// 			}
// 		}
// 	}
// 	return (
// 		<div>
// 			<span style={{textDecoration: 'underline', color: 'blue'}} onClick={selectFileHandler}>Change cover</span>
// 			<input
// 				style={{display: 'none'}}
// 				ref={inputRef}
// 				type="file"
// 				onChange={uploadHandler}
// 			/>
// 		</div>
// 	)
// }


import React, {FC} from 'react';
import {ChangeEvent, useEffect, useState} from "react";
import photoIcon from "../images/photoIcon.png";

const getBase64 = (file: FileList): Promise<string | ArrayBuffer | null> => {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();
		reader.readAsDataURL(file[0]);
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(reader.error);
	});
};

type PropsType = {

	callBack: (base64: string | ArrayBuffer | null) => void
}

export const InputTypeFile: FC<PropsType> = ({callBack}) => {

	const [file, setFile] = useState<FileList | null>(null);
	const [base64, setBase64] = useState<string | ArrayBuffer | null>(null);
	const [editMode, setEditMode] = useState(false)

	const setFileBase64 = async (file: FileList) => {
		const base = await getBase64(file);
		setBase64(base);
	};

	useEffect(() => {
		if (file) {
			setFileBase64(file);
		}
		return () => {
			setFile(null);
			setBase64(null);
		};
	}, [file]);

	const sendNewImage = () => {
		callBack(base64)

	}
	const setAvatarBackground = {
		backgroundImage: `url(${photoIcon})`
	}

	return (<div>
			{
				editMode
					? <div>
						<input

							id="file"
							name="file"
							// style={{display: 'none'}}
							type="file"
							onChange={(e: ChangeEvent<HTMLInputElement>) => setFile(e?.target.files)}
						/>
						<label style={setAvatarBackground} htmlFor="file"></label>
						<button
							onClick={sendNewImage}>send
						</button>
					</div>
					: <div>
						<img
							alt={'change avatar'}
							src={photoIcon}
							onClick={() => {
								setEditMode(true)
							}}
						/>
					</div>
			}
		</div>
	);
}

