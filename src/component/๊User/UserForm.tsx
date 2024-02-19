import {
  Input,
  Card,
  Row,
  Col,
  Button,
  Radio,
  Form,
  DatePicker,
  Select,
} from "antd";
import {} from "antd";
// import { useState } from "react";
// import { IUsers, UserList } from "./user.type";

// const { Title } = Typography;
function UserForm() {
  // const [user , setuser] = useState(UserList as IUsers[]);
  return (
    <>
      <Card bordered={false} style={{ width: 900, height: 400 }}>
        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* คำนำหน้าชื่อ :</Col>
          <Col xs={6} md={3}>
            <Input placeholder="คำนำหน้าชื่อ" />
          </Col>
          <Col style={{ margin: "5pX" }}>* ชื่อจริง :</Col>
          <Col xs={6} md={7}>
            <Input placeholder="ชื่อจริง" />
          </Col>
          <Col style={{ margin: "5pX" }}>* นามสกุล :</Col>
          <Col xs={6} md={7}>
            <Input placeholder="นามสกุล" />
          </Col>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* วันเกิด :</Col>
          <Col xs={6} md={3}>
            <Form.Item>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col style={{ margin: "5pX" }}>* สัญชาติ :</Col>
          <Col xs={6} md={7}>
            <Input placeholder="สัญชาติ" />
          </Col>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* เลขบัตรประชาชน :</Col>
          <Col xs={6} md={10}>
            <Input placeholder="เลขบัตรประชาชน" />
          </Col>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* เพศ :</Col>
          <Col xs={6} md={1}></Col>
          <Radio.Group style={{ margin: "เพศ" }}>
            <Radio value="a">ชาย</Radio>
            <Radio value="b">หญิง</Radio>
            <Radio value="c">ไม่ระบุ</Radio>
          </Radio.Group>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* หมายเลขเบอร์โทรศัพท์มือถือ :</Col>
          <Col xs={2} md={1}>
            <Select>
              <Select.Option value="+66">+66</Select.Option>
            </Select>
          </Col>
          <Col xs={6} md={1}>
            {/* <div>-</div> */}
          </Col>

          <Col xs={6} md={7}>
            <Input placeholder="เบอร์โทร" />
          </Col>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* หนังสือเดินทาง :</Col>
          <Col xs={6} md={8}>
            <Input placeholder="หนังสือเดินทาง" />
          </Col>
        </Row>

        <Row style={{ margin: "15pX" }}>
          <Col style={{ margin: "5pX" }}>* เงินเดือนที่คาดหวัง :</Col>
          <Col xs={6} md={7}>
            <Input placeholder="เงินเดือนที่คาดหวัง" />
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 4 }}>
            <Button>ล้างข้อมูล </Button>
          </Col>
          <Col>
            <Button>ส่งข้อมูล </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default UserForm;
