import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Jumbotron
} from 'reactstrap';

import mockupAnalytics from '../../public/img/mockups/analytics.jpg';
import mockupCli from '../../public/img/mockups/cli.jpg';

export default class ProductDescription extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron fluid className="pb-2">
              <h1 className="display-3">The CNDY Ecosystem</h1>
              <p className="lead">
                The goal of the CNDY project is to create a complete ecosystem
                to manage custom local crypto assets on Stellar in a
                user-friendly way.
                <br />
                A current proof of concept of the analytics API and frontend can
                be previewed here at <a href="http://cndy.store">cndy.store</a>.
                <br />
                For more information and the current state of the
                implementations, please visit our{' '}
                <a href="https://github.com/cndy-store">GitHub Account</a>.
              </p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              In many regions across the world, local trade associations invent
              their very own{' '}
              <a href="https://en.wikipedia.org/wiki/Local_currency#List_of_local_currencies">
                local currency
              </a>, usually to incentivize buying from local businesses.
            </p>

            <p>
              In most cases, this is achieved using some sort of paper coupons.
              The process of issuing and distributing such coupons is cumbersome
              and often degrades the local currency to be used as gift vouchers
              instead of a real currency that is used in daily life. It is also
              very hard for local trade associations to track the usage and
              success of such coupons.
            </p>

            <p>
              The <strong>CNDY</strong> (pronounced "candy") project provides
              the necessary tools to solve these issues. Instead of having to
              rely on paper coupons, the local community can easily create a
              virtual currency that is easy to use for everyone!
            </p>

            <h2 className="h5">CNDY can:</h2>

            <ul>
              <li>create a custom currency on the Stellar Network</li>
              <li>
                abstract away creating and funding the underlying Stellar
                account necessary to use the new currency
              </li>
              <li>
                create the necessary trustlines and distribute tokens to the
                newly created account
              </li>
              <li>
                provide a mobile wallet that can be used to easily pay with the
                local currency
              </li>
              <li>
                show insights about the adaption and usage of the currency in
                real time.
              </li>
            </ul>

            <p>
              <strong>CNDY</strong> enhances the Stellar ecosystem to embrace
              white label currencies, so the end user does not have to bother
              with the funding of a Stellar account and other technical details.
            </p>

            <p>
              <strong>CNDY</strong> creates additional services beyond the
              possibilities of the traditional paper coupon: Detailed{' '}
              <a href="http://cndy.store">analytics</a> for the local trade
              association, transparency by using the Stellar blockchain. It is
              possible to easily transfer and pay with the new currency, making
              it a real alternative to the regular currency.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr />
            <h2>The CNDY Toolset</h2>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <h3 className="h5">Issuer Command Line Interface</h3>
            <p>
              The CLI is a set of tasks that can be used to setup and maintain
              an asset on the Stellar Network.
              <br />
              Together with the mobile wallets the CLI makes it very easy to
              create and fund new keypairs and will take care of the required
              trustline operations.
              <br />
              This way, the issuer can provide a simple setup routine for the
              customer by generating a QR code, that the customer can scan with
              the mobile wallet.
            </p>

            <h3 className="h5">Mobile Wallet</h3>
            <p>
              To ensure customers actually use a custom crypto-asset,
              user-friendly and secure wallets are key. Our wallet will ensure
              that everyone will be able to use the asset, whether or not they
              have experience in the cryptosphere.
              <br />
              Users will be able to check their current balance as well as to
              retrieve and send tokens to others.
              <br />
              The wallet is developed in React Native and will be available soon
              for Android and iOS.
            </p>
          </Col>

          <Col xs="12" sm="12" md="12" lg="6">
            <img className="img-fluid" src={mockupCli} />
          </Col>
        </Row>

        <Row className="my-3">
          <Col xs="12" sm="12" md="12" lg="6">
            <h3 className="h5">Analytics</h3>
            <p>
              The Analytics platform collects statistics for the custom asset
              from the Stellar Network and provides a convenient JSON API to
              access them.
              <br />
              This enables the asset issuer to analyse the performance of their
              asset and get insights about the development and usage of the
              asset over time.
              <br />
              The API is developed in Go and an already working version powers
              the charts above.
            </p>

            <h3 className="h5">Issuer Desktop Client</h3>
            <p>
              We want to create a desktop client that makes maintaining and
              issuing an asset even easier than using the CLI.
              <br />
              Additionally, the desktop client will be used to provide help when
              setting up new mobile wallets for customers. It will be the
              frontend for the Analytics server, so an issuer has everything in
              place to make their asset successful.
            </p>
          </Col>

          <Col xs="12" sm="12" md="12" lg="6">
            <img className="img-fluid" src={mockupAnalytics} />
          </Col>
        </Row>
      </div>
    );
  }
}
