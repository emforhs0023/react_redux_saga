import { all, fork, call, takeLatest, takeEvery, put, take, delay } from 'redux-saga/effects';
import axios from "axios"
import {
    DATA_LIST_SUCCESS,
    DATA_LIST_REQUEST,
    DATA_LIST_FAILURE,
   
} from '../reducers/user';

function dataListAPI() {
  // 서버에 요청을 보내는 부분
  console.log("사가 연동 완료")
}

function* dataList() {
    try {
        const result = yield call(dataListAPI);
        
        yield put({ // put은 dispatch 동일
            type: DATA_LIST_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: DATA_LIST_FAILURE
        })
    }
}

function* watchMobileDataList() { 
    yield takeEvery(DATA_LIST_REQUEST, dataList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}






export default function* userSaga() {
    yield all([
       
        fork(watchMobileDataList),
      
    ]);
}