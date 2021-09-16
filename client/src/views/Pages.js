import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from '../components/AppContext'
import TradesPage from './TradesPage'
import Landingpage from './Landingpage'
import MakeTrade from './MakeTrade'
import CloseTrade from './CloseTrade'
import Login from './Login'
import GenericNotFound from './GenericNotFound'

//Route to different view 
//Need to add 'Not Found' page and redirect if user is not logged-in
export default function Pages() {
    const globalStates = useContext(AppContext)
    return (
        <>
                    <div style={{backgroundColor:"#0f0f0f", minHeight:"100vh"}}>
                        <Route path = "/" exact component={Landingpage} />
                        <Route path="/trades" exact component={TradesPage} />
                        <Route path="/maketrade" exact component={MakeTrade} />
                        <Route path="/closetrade" exact component={CloseTrade} />
                        <Route path="/login" exact component={Login} />
                    </div>
        </>
    )
}

