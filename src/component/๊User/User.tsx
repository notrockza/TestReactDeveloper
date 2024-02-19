import "../../App";
import { Button, Col,Row } from "antd";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { ButtonLanguage } from "../Changelanguage/ButtonLanguage";



function User() {
  return (
    <>
      <section className="section-text">
        <Row>
          <Col span={7}>
            <h1>การจัดการหน้าฟอร์ม</h1>
          </Col>
          <Col offset={15}>
            <ButtonLanguage/>
            <Col>
              {" "}
              <Button style={{margin:4}}> <Link to="/">หน้าหลัก </Link></Button>
            </Col>
          </Col>
        </Row>
      </section>

      <section className="section-contant">
        <UserForm />
      </section>

      <UserTable />
    </>
  );
}

export default User;
