import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const TableOverviewContainer = styled.div`
	overflow-x: auto;
	margin-top: 20px;
	margin-left: 40px;
	margin-bottom: 20px;

	table {
		width: 100%;
		text-align: left;
		font-size: 15px;
		border-collapse: collapse;

		.align--right {
			text-align: right;
		}

		thead {
			tr {
				th {
					font-weight: 600;
					line-height: 19px;
					border: 1px solid black;
					color: black;
					font-size: 16px;
					padding: 10px;
					text-align: center;
					white-space: nowrap;

					&:first-child {
						padding-left: 20px;
					}

					&:last-child {
						padding-right: 20px;
					}
				}
			}
		}

		tbody {
			color: black;

			tr.clickable {
				cursor: pointer;
				&:hover {
					background-color: green;
					cursor: pointer;
				}
			}

			tr:nth-child(odd) {
				background-color: lightgrey;
			}

			td {
				padding: 10px;
				white-space: normal;
				border: 1px solid black;
				height: 60px;
				min-height: 60px;

				&:first-child {
					padding-left: 20px;
				}

				&:last-child {
					padding-right: 20px;
				}
			}

			td.status {
				display: flex;
				align-items: center;
			}
		}
	}

	/* media-queries */
	@media (max-width: 500px) {
		table tbody td:last-child {
			padding-right: 15px;
		}

		table thead tr th:first-child,
		table tbody td:first-child {
			padding-left: 15px;
		}
	}
`;

interface headerType {
	title?: string;
	align?: string;
	render?: Function;
}

// type headerType = headerInt[];

interface Props {
	rows: any;
	headers?: headerType[];
	showHead?: boolean;
	onRowClick?: Function | ((x?: Object) => void);
	allowRowClick?: boolean;
}

export const Table: React.FC<Props> = ({
	headers,
	rows,
	showHead,
	...rest
}) => {
	return (
		<TableOverviewContainer {...rest}>
			<table>
				{showHead && (
					<thead>
						<tr>
							{headers?.map((header) => {
								return (
									<th
										key={header.title}
										className={clsx({
											'align--right': header.align === 'right',
										})}
									>
										{header.title}
									</th>
								);
							})}
						</tr>
					</thead>
				)}
				<tbody>
					{rows.map((row: any) => (
						<tr
							key={row.id}
							// className={clsx({ clickable: allowRowClick })}
						>
							{headers?.map((header) => {
								return (
									<td
										key={header.title}
										className={clsx({
											'align--right': header.align === 'right',
										})}
									>
										{header && header?.render?.(row)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</TableOverviewContainer>
	);
};
export default Table;
