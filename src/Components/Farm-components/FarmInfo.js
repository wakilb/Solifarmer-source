import { useParams } from "react-router-dom";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import FarmStaff from "./FarmStaff";

function FarmInfo() {
  let params = useParams();
  const farmName = params.farmName;
  return (
    <>
      <Row>
        <Col className="col-md-12">
          <Tabs
            defaultActiveKey="general"
            id="controlled-tab-example"
            className="nav-fill"
          >
            <Tab eventKey="general" title="General">
              here come Info Farm name : {farmName}
            </Tab>
            <Tab eventKey="Staff" title="Staff">
              <FarmStaff />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default FarmInfo;
