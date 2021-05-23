import React, { useEffect, useState } from 'react'

const GoogleAuth = () => {


    const [isSignedIn, setSignedIn] = useState(null)
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '615182011125-l66hnd1h9ganf5ndk9dipjodah860scn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance()
                setSignedIn(auth.isSignedIn.get())
                auth.isSignedIn.listen(() => setSignedIn(auth.isSignedIn.get()))
            })
        })

    }, [])

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null
        }
        else if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={() => window.gapi.auth2.getAuthInstance().signOut()}>
                    <i className="google icon"></i>Sign Out
                </button>
            )
        } else {
            return (<button className="ui blue google button" onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>
                <i className="google icon"></i>Sign In
            </button>
            )
        }
    }
    return (
        <div >
            {renderAuthButton()}
        </div>
    )
}

export default GoogleAuth
