import { Icon } from '@iconify/react'

const Icons = (iconProps: {
    icon: string
    fontSize: string
    marginLeft: string
    paddingBottom: string
    marginBottom: string
}) => {
    return (
        <Icon
            icon={iconProps.icon}
            style={{
                fontSize: iconProps.fontSize,
                marginLeft: iconProps.marginLeft,
                paddingBottom: iconProps.paddingBottom,
                marginBottom: iconProps.marginBottom,
            }}
        />
    )
}

export default Icons