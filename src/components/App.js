import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from '../app-router';

const App = ({appStore}) => (
    <Provider store={appStore}>
        <AppRouter />
    </Provider>
);

export default App;