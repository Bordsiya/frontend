import {Alert} from '@gravity-ui/uikit';

export function ResultAlert({
    resultAlertOpen, 
    setResultAlertOpen, 
    resultAlertType,
    resultAlertTitle, 
    resultAlertMessage,
}) {

    const handleCloseAlert = () => {
        setResultAlertOpen(false);
    };

    return (
        <div>
            { 
                resultAlertOpen && (
                    <Alert style={{width: '30%'}}
                        theme={resultAlertType} 
                        title={resultAlertTitle} 
                        message={resultAlertMessage} 
                        onClose={handleCloseAlert}
                    />
                )
            }
        </div>
    );
}

export const successAlertResult = (title, message) => {
    return {
        alertType: 'success',
        alertTitle: title,
        alertMessage: message
    };
}