export interface IToast {
    isError?: boolean,
    type?: {
        style?: string,
        icon?: boolean,
    } | undefined,
    closable?: boolean,
    toastMessage?: string,
}

export interface IToastMessage {
    isError?: boolean,
    type?: {
        style?: string,
        // style?: 'error' | 'none' | 'success' | 'warning' | 'info',
        icon?: boolean,
    },
    closable?: boolean
    toastMessage?: string,
    closeEvent: any,
}