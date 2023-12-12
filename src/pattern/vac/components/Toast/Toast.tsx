/**
 * todo : 본 파일은 toast에 대한 정의 및 eventHandling 하기 위함..
 */

import { useState } from 'react'
import ToastView from './ToastView.tsx'
import { IToast } from '../../../../interface/IToast.ts'

/**
 *
 * @param toastProps
 * @constructor
 */
const Toast = (toastProps: IToast) => {
    const [error, setError] = useState<boolean>(toastProps.isError || false);

    const closeEvent = () => {
        setError(false);
    }

    const toastViewProps = {
        isError: error,
        type: toastProps.type,
        closable: toastProps.closable,
        toastMessage: toastProps.toastMessage,
        closeEvent: closeEvent,
    };

    return <ToastView {...toastViewProps} />
}
export default Toast


