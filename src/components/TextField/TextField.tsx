import { ChangeEvent, FC, useRef, useState } from "react";
import style from './TextField.module.css';

interface ITextField {
    placeholder: string;
    type: 'text' | 'password' | 'email';
    iconBtn: string | null;
    IconHandler?: (ref: HTMLInputElement | undefined) => void | null;
}

const TextField: FC<ITextField> = ({ placeholder, iconBtn, type, IconHandler = () => null }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null!);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleIconClick = () => {
        IconHandler && IconHandler(inputRef.current);
    };

    return (
        <div className={style.TextField}>
            <input
                ref={inputRef}
                className={style.TextFieldInput}
                type={type}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
            {iconBtn && (
                <img src={iconBtn} alt={'Button'} onClick={handleIconClick} />
            )}
        </div>
    );
};

export default TextField;
