import { takeEvery } from 'redux-saga/effects';

function* effects() {
    yield takeEvery('@@reduxFirestore/LISTENER_RESPONSE', (action: any) => {
        console.log('I got called');
    });
}

export default effects;
