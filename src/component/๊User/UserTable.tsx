import React, { useState } from "react";
import { Dropdown, Table } from "antd";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import { DeleteFilled, EditFilled, InfoCircleFilled } from "@ant-design/icons";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  tell: number;
  sex:string;
  nationality:string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "ชื่อ",
    dataIndex: "name",
  },
  {
    title: "เพศ",
    dataIndex: "sex",
  },
  {
    title: "หมายเลขโทรศัพท์มือถือ",
    dataIndex: "tell",
  },
  {
    title: "สัญชาติ",
    dataIndex: "nationality",
  },
  {
        
    title: "การจัดการ",
    key: "action",
    render: ( ) => {
      const items: MenuProps["items"] = [
        {
          label: "แก้ไข",
          key: "1",
          icon: <EditFilled />,
          className: "text-st",
          style: { color: "#ffbe0b" },
         
        },
        {
          label: "เพิ่มเติม",
          key: "2",
          icon: <InfoCircleFilled />,
          className: "text-st",
          style: { color: "#0077b6" },
         
        },
        {
          label: "ลบ",
          key: "3",
          icon: <DeleteFilled />,
          className: "text-st",
          style: { color: "#e63946" },
        
          
          
        },
      ];
      return (
        <Dropdown.Button menu={{ items }} className="text-st">
          <div>เลือก</div>
        </Dropdown.Button>
      );
    },
  },
];

const data: DataType[] = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: 'nametest',
    sex: "ไม่ระบุ",
    tell: 1669,
    nationality: "ไทย"
    
  });
}

export const UserTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div style={{ padding:25}}>
 
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default UserTable;
