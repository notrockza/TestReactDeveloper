import { Card, Col, Row } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { ButtonLanguage } from "./Changelanguage/ButtonLanguage";


function User() {
  return (
    <>
      <div className="section-l">
      <ButtonLanguage/>
      </div>
      <div className="section-app">
        <Col offset={15}></Col>
        <Row gutter={16}>
          <Col span={8}>
            <Link to="/layoutstyle">
              <Card title="เเบบทดลองที่ 1" bordered={false}>
                การจัดการหน้าเว็บ
              </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/">
              <Card title="เเบบทดลองที่ 2" bordered={false}>
                การเชื่อมต่อ API
              </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/user">
              <Card title="เเบบทดลองที่ 3" bordered={false}>
                การจัดการหน้าฟอร์ม
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
