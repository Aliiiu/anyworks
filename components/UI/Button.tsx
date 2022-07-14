import React, { FC } from 'react';

const Button: FC<{
	content: string | JSX.Element;
	styles: string;
	onClick?: () => void;
}> = ({ content, styles, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles} btnStyle border-solid border-1  px-[20px] py-[12px] rounded-[8px] text-[16px] lg:text-[18px]  border-primary text-white hover:bg-[white] hover:text-primary`}
		>
			{content}
		</button>
	);
};

export default Button;
