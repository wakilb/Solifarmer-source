import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import FarmInfo from "./FarmInfo";
import FarmRecords from "./FarmRecords";
import FarmStatistics from "./FarmStatistics";

function Farm() {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="col-md-12">
            <Tabs
              defaultActiveKey="info"
              id="controlled-tab-farm"
              className="nav-fill"
            >
              <Tab eventKey="info" title="Info">
                <FarmInfo />
              </Tab>
              <Tab eventKey="records" title="Records">
                <FarmRecords />
              </Tab>
              <Tab eventKey="statistics" title="Statistics">
                <FarmStatistics />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Farm;
