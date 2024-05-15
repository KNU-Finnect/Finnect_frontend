import { useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import ColumnForm from '@finnect/pages/companies/components/ColumnForm';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CompanyAgGrid = () => {
  const [rowData, setRowData] = useState([
    {
      Companies: 'Tesla',
      Domains: 'Model Y',
      Categories: 'B2B',
      About: 'true',
    },
    {
      Companies: 'Microsoft',
      Domains: 'Model Y-Seires',
      Categories: 'B2C',
      About: 'true',
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'Companies',
      checkboxSelection: true,
      editable: true,
    },
    { field: 'Domains', editable: true },
    {
      field: 'Categories',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'B2B',
          'B2C',
          'Banking & Mortgages',
          'Beverages',
          'Biotechnology',
          'Broadcasting',
          'Building Materials',
          'Buisness Supplies',
          'Chemicals',
          'Civil Engineering',
          'Cloud Services',
          'Communications',
          'Computer Hardware',
          'Construction',
          'Construction Contractors & Services',
          'Consulting & Professional Services',
          'Consumer Discretionary',
          'Consumer Electronics',
          'Consumer Goods',
          'Consumer Staples',
          'Coporate & Business',
          'Cosmetics',
          'Design',
          'E-Commerce',
          'E-Commerce & Marketplaces',
          'E-Learning',
          'Education',
          'Electrical',
          'Energy',
          'Energy & Utilities',
          'Enterprise',
          'Entertainment & Recreation',
          'Events',
          'Eyewear',
          'Facilities',
          'Financial Services',
          'Fine Art',
          'Firearms',
          'Fishery',
          'Food',
          'Food Production',
          'Forums',
          'Fundraising',
          'Gambling & Casinos',
          'Government',
          'Ground Transportation',
          'Health & Wellness',
          'Health Care',
          'Higher Education',
          'Home & Furniture',
          'Home Improvement',
          'Human Resources',
          'Import & Export',
          'Industrials & Manufacturing',
          'Information Technology & Services',
          'Insurance',
          'International Relations',
          'International Trade',
          'Internet',
          'Investment',
          'Investment Banking',
          'Investment Management',
          'ISP',
          'Jewelry Watching & Luxury Goods',
          'Judiciary',
          'Law Enforcement',
          'Libraries',
          'Machinery',
          'Maritime',
          'Market Research',
          'Marketing & Advertising',
          'Marketplace',
          'Mechanical Engineering',
          'Media',
          'Medicine',
          'Military',
          'Mining & Metals',
          'Mobile',
          'Movies & TV',
          'Museums',
          'Music',
          'Nanotechnology',
          'Networking',
          'Non-Profit & Philanthropy',
          'Oil & Gas',
          'Outsourcing',
          'Packaging & Containers',
          'Paper Goods',
          'Payments',
          'Performing Arts',
          'Pharmaceuticals',
          'Pharmacy',
          'Photography',
          'Plastics',
          'Plumbing',
          'Political Organization',
          'Pornography',
          'Printing',
          'Public Relations',
          'Publishing',
          'Ranching',
          'Real Estate',
          'Religion',
          'Renewables & Environment',
          'Restaurants',
          'Retail',
          'SAAS',
          'Sanitization & Academic Research',
          'Security',
          'Services',
          'Shipbuilding',
          'Shipping & Logistics',
          'Society',
          'Sporting Goods',
          'Sports & Fitness',
          'Stores',
          'Talent Agencies',
          'Technology',
          'Telecommunications',
          'Textiles',
          'Tobacco',
          'Tools',
          'Translation',
          'Transportation',
          'Travel & Leisure',
          'Utilities',
          'Venture Capital',
          'Veterinary',
          'Video Games',
          'Warehousing',
          'Web Services & Apps',
          'Wholesale',
        ],
      },
    },
    { field: 'About', editable: true },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };
  }, []);

  const handleAddColumn = () => {
    setColumnModalVisible(true);
  };

  const handleColumnModalCancel = () => {
    setColumnModalVisible(false);
  };

  const handleCreateColumn = (values) => {
    const { name, type } = values;
    setColumnDefs((prevDefs) => [
      ...prevDefs,
      {
        field: name,
        editable: true,
      },
    ]);
    setColumnModalVisible(false);
  };

  const [columnModalVisible, setColumnModalVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={handleAddColumn}
          icon={<PlusOutlined />}
        >
          속성 추가하기
        </Button>
      </div>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
      </div>
      <Modal
        title='속성 추가하기'
        visible={columnModalVisible}
        onCancel={handleColumnModalCancel}
        footer={null}
      >
        <ColumnForm onCreate={handleCreateColumn} />
      </Modal>
    </div>
  );
};

export default CompanyAgGrid;
