import React from "react"
import { Col, Divider, Row, Steps } from "antd"
import "./releaseSchedule.scss"

const {Step} = Steps;

const ReleaseSchedule = () => {
  return (
    <section className="releaseSchedule container">
      <Row>
      <h2>Release Schedule</h2>
      <Divider dashed />
        <Col span={24}>
          <p>Each round of tokens will be released on different exchanges as liquidity from the liquidity reserves. Round 1 was done on Uniswap. Additional rounds will be completed as project gains traction.</p>
          <Steps current={0} percent={0}>
            <Step title="Round 1-5" description="30,000,000 Tokens" />
            <Step title="Round 6-7" description="20,000,000 Tokens" />
            <Step title="Round 7-14" description="10,000,000 Tokens" />
          </Steps>
        </Col>
      </Row>
    </section>
  )
}

export default ReleaseSchedule
