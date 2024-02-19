import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { useTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";
//rafc


export const ButtonLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    const items: MenuProps["items"] = [
        {
          label: "ไทย",
          key: "1",
          onClick: () =>
          changeLanguage('th'),
        },
        {
          label: "English",
          key: "2",
          onClick: () =>
          changeLanguage('en'),
        },
      ];
      
      const menuProps = {
        items,
        // onClick: handleMenuClick,
      };

    
  return (
    <div>
      
      <Dropdown menu={menuProps}>
        <Button style={{ margin: 4 }}>
          <Space>
          {t('ภาษา')}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>{" "}
    </div>
  );
};
