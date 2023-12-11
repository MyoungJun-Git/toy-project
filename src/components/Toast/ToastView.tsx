import {
    Notification,
    NotificationGroup,
} from '@progress/kendo-react-notification'
import { Fade } from '@progress/kendo-react-animation'
import { IToastMessage } from '../../interface/IToast.ts'

const ToastView = (toastViewProps: IToastMessage) => {
// const ToastView = ({isError, type, closable, toastMessage, closeEvent}: IToastMessage) => {
    console.log({ toastViewProps });
    // return (
    //     <NotificationGroup
    //         style={{
    //             color:'red',
    //             right: 5,
    //             bottom: 5,
    //             alignItems: "flex-start",
    //             flexWrap: "wrap-reverse",
    //         }}
    //     >
    //         <Notification>This is a notification!</Notification>
    //     </NotificationGroup>
    // )
    return (
        <NotificationGroup
            style={{
                color: 'red',
                right: 5,
                bottom: 5,
                alignItems: 'flex-start',
                flexWrap: 'wrap-reverse',
            }}
        >
            <Fade>
                {toastViewProps.isError && (
                    <Notification
                        type={{
                            style: 'error',
                            icon: true,
                        }}
                        closable={toastViewProps.closable}
                        onClose={() => toastViewProps.closeEvent()}
                    >
                        <span>{toastViewProps.toastMessage}</span>
                    </Notification>
                )}
            </Fade>
        </NotificationGroup>
    )
}

export default ToastView
