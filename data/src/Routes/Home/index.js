import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DATA_LIST_REQUEST } from '../../store/reducers/user';


const Home = () => {

    const { dataList, loading } = useSelector(state => state.user);
	const dispatch = useDispatch();
	
	useEffect(() => {

	    dispatch({
            type: DATA_LIST_REQUEST
        });

	}, []);
	
	return (
		<>	
			<div>
                안녕
            </div>
		</>
	)
}

export default Home