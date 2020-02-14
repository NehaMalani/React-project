import ReactTable from 'react-table';
import 'react-table/react-table.css';
import React from 'react';

/**
 * Added by E5CTBU7
 */
const columns = [
  {
    Header: 'Serial Number',
    accessor: 'serialNumber',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Registration Type',
    accessor: 'registrationType',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Date',
    accessor: 'date',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Status',
    accessor: 'status',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'View/Edit',
    accessor: 'view',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
];

export default class ReactTableComponent extends React.Component {

  render() {
    return [
      <div style={{ padding: '50px' }}>
        <ReactTable
          manual
          minRows={0}
          pageSize={1}
          data={this.props.regData}
          columns={columns}
          pages={0}
          showPagination={true}
        />
      </div>
    ];
  }
}
