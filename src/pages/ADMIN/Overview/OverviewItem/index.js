import CountUp from 'react-countup';
import { Statistic } from 'antd';
import { OverviewItemStyled } from "./styled";

const formatter = (value) => <CountUp end={value} separator="," />;

const OverviewItem = ({ total, title }) => {
    return (
        <OverviewItemStyled>
            <Statistic title={title} value={total} formatter={formatter} />
        </OverviewItemStyled>
    );
}

export default OverviewItem;