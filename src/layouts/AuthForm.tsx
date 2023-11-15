import TextField from "../components/TextField/TextField";
import ClearBtn from '../assets/ClearIcon.svg'
import EyeIcon from '../assets/EyeIcon.svg'
import Button from "../components/Button/Button";

const AuthForm = () => {

    const handleEmailIcon = (ref: HTMLInputElement) => {
        ref.value = ''
    }

    const handlePassIcon = (ref: HTMLInputElement) => {
        if (ref.type === 'password') {
            ref.type = 'text';
        } else if (ref.type === 'text') {
            ref.type = 'password';
        }
    };

    const handleFetchData = async () => {
        try {
            const response = await fetchDataMock()
            console.log('Data from the server:', response)

            if (response.success) {
                alert('You have been successfully authorized!')
            } else {
                console.error('Authorization failed')
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const fetchDataMock = () => {
        return new Promise<{ success: boolean }>((resolve) => {
            setTimeout(() => {
                resolve({ success: true })
            }, 1000)
        });
    };

    return (
        <div style={{ width: '500px', padding: '40px 50px 40px 50px' }}>
            <TextField
                placeholder={'Enter Email'}
                type={"text"}
                iconBtn={ClearBtn}
                IconHandler={handleEmailIcon}
            />
            <TextField
                placeholder={'Password'}
                type={"password"}
                iconBtn={EyeIcon}
                IconHandler={handlePassIcon}
            />

            <Button
                onClick={handleFetchData}
            />
        </div>
    );
};

export default AuthForm;