import { Col, Row, Table } from "antd";
import { Column   } from '@ant-design/charts';
import moment from "moment";
import SubscribersApi from "./api/subscribersApi";
import { useQuery } from 'react-query'

const SubscriberTable = () => {
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
		},
		{
			title: 'Имя',
			dataIndex: 'name',
		},
		{
			title: 'Логин',
			dataIndex: 'login',
		},
		{
			title: 'Chat ID',
			dataIndex: 'telegramId',
		},
		{
			title: 'Подписка',
			dataIndex: 'typeSubscribe',
			render: (text, record) => record.typeSubscribe === 'DEMO' ? "Демо" : "Полная"
		},
		{
			title: 'Начало подписки',
			dataIndex: 'startDate',
			render: (text, record) => moment(record.startDate).format('DD-MM-YYYY')
		},
		{
			title: 'Конец подписки',
			dataIndex: 'finishDate',
			render: (text, record) => <span
				style={{color: moment(record.finishDate) < moment() ? 'red' : ''}}>{moment(record.finishDate).format('DD-MM-YYYY')}</span>
		},
	];

	const data = useQuery([SubscribersApi.name, SubscribersApi.getAll.name], SubscribersApi.getAll);
	const statSubData = useQuery([SubscribersApi.name, SubscribersApi.getStatistic.name], SubscribersApi.getStatistic);

	const config = {
		data: statSubData.data || [],
		xField: 'month',
		yField: 'count'
	};

	return <>
		<Row gutter={24}>
			<Col span={24}>
				<Table dataSource={data.data} columns={columns}/>
			</Col>
		</Row>
		<Row gutter={24}>
			<Col span={24}>
				<Column  {...config} height={200}/>
			</Col>
		</Row>
	</>

};

export default SubscriberTable;