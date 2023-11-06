import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import globalSlice from '../../redux/globalSlice';
import { globalSelector } from '../../redux/selector';

const Paginate = ({ totalPage, location }) => {

    const dispatch = useDispatch();
    const global = useSelector(globalSelector);

 
    return (
        <div style={{textAlign:location, margin:'12px 0'}}> 
            <Pagination current={global.page+1} total={totalPage*10} onChange={e => dispatch(globalSlice.actions.changePage(e-1))} />
        </div>
    );
}
 
export default Paginate;