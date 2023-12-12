// import React from 'react'

import { Badge } from 'react-bootstrap'
import { Ibadge } from '../../../interface/Iatoms.ts'

const Badges = (badgeProps: Ibadge) => {
    return (
        <Badge bg={badgeProps.bg}>
            {badgeProps.name}
        </Badge>
    )
}

export default Badges