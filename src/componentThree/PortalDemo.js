import React from 'react'
import reactDom from 'react-dom'

function PortalDemo() {
    return reactDom.createPortal(
        <div>
            <h6>Portals Demo // for mounting components on any roots</h6>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
