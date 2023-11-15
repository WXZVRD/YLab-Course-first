import { FC } from "react";
import style from './Button.module.css';

interface IButton {
    onClick: () => Promise<void> | null;
}

const Button: FC<IButton> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={style.SignIn}>
            Sign In
        </button>
    );
};

export default Button;
