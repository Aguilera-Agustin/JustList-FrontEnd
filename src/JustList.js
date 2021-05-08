import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import {store} from './redux/store/store'

export const JustList = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <AppRouter/>
        </Provider>
    )
}
