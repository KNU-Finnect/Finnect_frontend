import { useMemo, useState } from 'react';

import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import ColumnForm from '@finnect/components/common/modal/company/ColumnForm';
import CompanyForm from '@finnect/components/common/modal/company/CompanyForm';
import { CompanyInterface } from '@finnect/interface/CompanyInterface';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CompanyAgGrid = () => {
  const [rowData, setRowData] = useState<CompanyInterface[]>([
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

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      headerName: 'Companies',
      field: 'Companies',
      checkboxSelection: true,
    },
    { headerName: 'Domains', field: 'Domains' },
    {
      headerName: 'Categories',
      field: 'Categories',
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
          'Business Supplies',
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
    { headerName: 'About', field: 'About' },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
      floatingFilter: true,
    };
  }, []);

  const handleAddColumn = () => {
    setColumnModalVisible(true);
  };

  const handleColumnModalCancel = () => {
    setColumnModalVisible(false);
  };

  const handleCreateColumn = (values: { name: any; type: any }) => {
    const { name, type } = values;

    let newColumnDef: ColDef<any, any>;
    if (type === 'text') {
      newColumnDef = {
        headerName: name,
        field: name,
        cellDataType: 'text',
        editable: true,
      };
    } else if (type === 'number') {
      newColumnDef = {
        headerName: name,
        field: name,
        editable: true,
        cellDataType: 'number',
      };
    } else if (type === 'date') {
      newColumnDef = {
        headerName: name,
        field: name,
        cellDataType: 'date',
        editable: true,
      };
    }

    setColumnDefs((prevDefs) => [...prevDefs, newColumnDef]);
    setColumnModalVisible(false);
  };

  const [columnModalVisible, setColumnModalVisible] = useState(false);
  const [companyModalVisible, setCompanyModalVisible] = useState(false);

  const handleAddCompany = () => {
    setCompanyModalVisible(true);
  };

  const handleCompanyModalCancel = () => {
    setCompanyModalVisible(false);
  };

  const handleCreateCompany = (values: { name: string; domain: string }) => {
    const { name, domain } = values;

    setRowData((prevData) => [
      ...prevData,
      {
        Companies: name,
        Domains: domain,
        Categories: '',
        About: '',
      },
    ]);
    setCompanyModalVisible(false);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={handleAddColumn}
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          속성 추가하기
        </Button>
        <Button
          type='primary'
          onClick={handleAddCompany}
          icon={<PlusOutlined />}
        >
          회사 추가하기
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
      <Modal
        title='회사 추가하기'
        visible={companyModalVisible}
        onCancel={handleCompanyModalCancel}
        footer={null}
      >
        <CompanyForm onCreateCompany={handleCreateCompany} />
      </Modal>
    </div>
  );
};

export default CompanyAgGrid;
