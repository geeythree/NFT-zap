import Crouton from 'react-crouton'
import React from 'react'

export default function Toast({props, children}) {
    var data ={
        id: Date.now(),
        type: props.type,
        message: props.msg,
        autoMiss: true || false,
        buttons: [{
            name: 'close',
            listener: function() {

            }
        }],
        hidden: false,
        timeout: 2000
    }
    return (
        <>
            <Crouton
            id={data.id}
            type={data.type}
            message={data.message}
            buttons={data.buttons}
            hidden={data.hidden}
            timeout={data.timeout}
            autoMiss={data.autoMiss}>
                    {children}
            </Crouton>
        </>
    )
}
