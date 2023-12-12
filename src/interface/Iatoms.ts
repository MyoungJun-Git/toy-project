import { ReactNode } from 'react'

export interface Ibuttons {
    children?: ReactNode
    hidden?: boolean
    className?: string
    variant?: string
    onClick?: any
}

export interface Iinput {
    className?: string
    type?: string
    ref?: any
}

export interface Ititle {
    type?: string
    className?: string
    title?: string
}

export interface Icontent {
    className?: string
    content?: string
}

export interface Ispinner {
    animation?: any
    variant?: string
    parentStyle?: any
    childStyle?: any
}

export interface Ibadge {
    key?: number | string | object
    bg?: string
    name?: string
}

