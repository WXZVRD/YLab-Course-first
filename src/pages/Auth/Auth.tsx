import {FC} from "react";
import AuthForm from "../../layouts/AuthForm";
import style from './Auth.module.css'

const Auth: FC = () => {
    return (
        <div className={style.authPage}>
            <AuthForm/>
        </div>
    );
};

export default Auth;
