import { Heading, StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export function LinearGraphic(props) {
	const { data, title } = props;

	return (
		<VStack align="start">
			<Heading as="h3" size="lg" mb="5">
				{title}
			</Heading>
			<ResponsiveContainer width="100%" minHeight="280px">
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="value" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</VStack>
	);
}
