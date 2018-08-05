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

import LandingRow from '../../components/LandingRow';
import mockupAnalytics from '../../../public/img/mockups/analytics.jpg';
import mockupCli from '../../../public/img/mockups/cli.jpg';
import mockupMobile from '../../../public/img/mockups/mobile.jpg';

export default class ProductDescription extends Component {
  render() {
    return (
      <div className="row info-body">
        <main className="col main mt-4">
          <div className="animated fadeIn">
            <LandingRow className="banner align-items-end">
              <Col>
                <Jumbotron fluid className="pb-2 text-with-shadow">
                  <h1 className="display-3">The CNDY Ecosystem</h1>
                  <p className="lead">
                    <strong>CNDY</strong> (pronounced "candy") enables trade
                    associations and organic food markets to create a digital
                    local currency, enabling their customers to support their
                    local businesses.
                  </p>
                </Jumbotron>
              </Col>
            </LandingRow>

            <LandingRow className="my-3 py-3">
              <Col>
                <p className="lead">
                  Its intention is to provide a safe and easy to use alternative
                  to local currencies, currently often just paper coupons.
                  <br />
                  With white labeled mobile apps and detailed{' '}
                  <a href="/#/dashboard">insights</a> of the currency usage and
                  adaption, CNDY goes way beyond the possibilities of
                  traditional paper coupons.
                </p>

                <p className="lead">
                  It abstracts away the difficulties of creating and managing
                  assets on the blockchain. It uses{' '}
                  <a href="https://www.stellar.org">Stellar</a>, one of the most
                  stable and widely used blockchains available today. With its
                  strong and well documented focus on custom assets, Stellar is
                  the perfect fit for your local currency.
                </p>

                <p className="lead">
                  <strong>CNDY</strong> is open source! All code is made
                  available on our{' '}
                  <a href="https://github.com/cndy-store">GitHub Account</a>.
                </p>
              </Col>
            </LandingRow>

            <LandingRow>
              <Col xs="12" sm="12" md="12" lg="6">
                <p>
                  In many regions across the world, local trade associations
                  invent their very own{' '}
                  <a href="https://en.wikipedia.org/wiki/Local_currency#List_of_local_currencies">
                    local currency
                  </a>, usually to incentivize buying from local businesses.
                </p>

                <p>
                  In most cases, this is achieved using some sort of paper
                  coupons. The process of issuing and distributing such coupons
                  is cumbersome and often degrades the local currency to be used
                  as gift vouchers instead of a real currency that is used in
                  daily life. It is also very hard for local trade associations
                  to track the usage and success of such coupons.
                </p>

                <p>
                  The CNDY ecosystem provides the necessary tools to solve these
                  issues. Instead of having to rely on paper coupons, the local
                  community can easily create a virtual currency that is easy to
                  use for everyone!
                </p>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6">
                <Card>
                  <CardBody>
                    <p>
                      <strong>CNDY</strong> creates additional services beyond
                      the possibilities of the traditional paper coupon:
                      Detailed insights for the local trade association using
                      our{' '}
                      <a href="https://cndy.store/#/dashboard">
                        Analytics Dashboard
                      </a>, transparency by using the Stellar blockchain.
                    </p>
                    <p>
                      It is possible to easily transfer and pay with the new
                      currency, making it a real alternative to the regular
                      currency.
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Visit Dashboard
                    </button>
                  </CardBody>
                </Card>
              </Col>
            </LandingRow>

            <LandingRow>
              <Col xs="12" sm="12" md="12" lg="6">
                <h2 className="h5">CNDY can</h2>

                <ul>
                  <li>Create a custom currency on the Stellar Network</li>
                  <li>
                    Abstract away creating and funding the underlying Stellar
                    account necessary to use the new currency
                  </li>
                  <li>
                    Create the necessary trustlines and distribute tokens to the
                    newly created account
                  </li>
                  <li>
                    Provide a white-labeled mobile wallet (available for iOS and
                    Android) so customers can easily trade and pay with your
                    currency
                  </li>
                  <li>
                    Show insights about the adaption and usage of the currency
                    in real time.
                  </li>
                </ul>
              </Col>
            </LandingRow>

            <LandingRow className="my-3 py-3 row-hl">
              <Col xs="12" sm="12" md="12" lg="6">
                <h3>CNDY is ready! See it in action!</h3>

                <p className="lead">
                  The white label app is currently tested with the CNDY coin - a
                  tradeable local crypto asset to pay sweets at a candy bar.
                </p>
                <p className="lead">
                  You can follow our current candy consumption in real time on
                  the <a href="/#/dashboard">Analytics Dashboard</a>.
                </p>

                <Row>
                  <Col>
                    <a href="https://play.google.com/store/apps/details?id=com.cndywallet&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                      <img
                        className="img-fluid"
                        alt="Get it on Google Play"
                        src="./img/en_badge_web_generic.png"
                      />
                    </a>
                  </Col>

                  <Col />
                  <Col />
                </Row>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/fKPy9VRpWP8?rel=0"
                    allowfullscreen
                  />
                </div>
              </Col>
            </LandingRow>

            <LandingRow>
              <Col>
                <h2>CNDY components</h2>
              </Col>
            </LandingRow>

            <LandingRow className="my-3">
              <Col xs="12" sm="12" md="12" lg="6">
                <h3>Mobile Wallet</h3>
                <p>
                  To ensure customers actually use a custom crypto-asset,
                  user-friendly and secure wallets are key. Our wallet ensures
                  that everyone will be able to use the asset, whether or not
                  they have experience in the cryptosphere.
                  <br />
                  Users can check their current balance and retrieve and send
                  tokens of your local currency to others by simply scanning a
                  QR code.
                  <br />
                  The wallet is developed in React Native and is be available
                  for Android and iOS.
                  <br />
                  The wallet is open source and available on{' '}
                  <a href="https://github.com/cndy-store/mobile-wallet">
                    GitHub
                  </a>.
                </p>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6">
                <img className="img-fluid" src={mockupMobile} />
              </Col>
            </LandingRow>

            <LandingRow className="my-3 py-3 row-grey">
              <Col xs="12" sm="12" md="12" lg="6">
                <h3>Analytics</h3>
                <p>
                  The Analytics platform collects statistics for the custom
                  asset from the Stellar Network and provides a convenient JSON
                  API to access them.
                  <br />
                  This enables the asset issuer to analyse the performance of
                  their asset and get insights about the development and usage
                  of the asset over time.
                  <br />
                  The API is developed in Go and powers the charts on the{' '}
                  <a href="https://cndy.store/#/dashboard">
                    Analytics Dashboard
                  </a>.
                  <br />
                  The API is open source,{' '}
                  <a href="https://api.cndy.store">well documented</a> and
                  tested. You can find the source code on{' '}
                  <a href="https://github.com/cndy-store/analytics">GitHub</a>.
                </p>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6">
                <img className="img-fluid" src={mockupAnalytics} />
              </Col>
            </LandingRow>

            <LandingRow className="my-3">
              <Col xs="12" sm="12" md="12" lg="6">
                <h3>Issuer Command Line Interface</h3>
                <p>
                  The CLI provides easy access to all tasks required setup and
                  maintain an asset on the Stellar Network.
                  <br />
                  Together with the mobile wallets the CLI makes it very easy to
                  create and fund new keypairs and will take care of the
                  required trustline operations.
                  <br />
                  This way, the issuer can provide a simple setup routine for
                  the customer by generating a QR code, that the customer can
                  scan with the mobile wallet.
                  <br />
                  Like all tools in the CNDY ecosystem, the CLI is open source
                  and available on{' '}
                  <a href="https://github.com/cndy-store/cli">GitHub</a>.
                </p>
              </Col>

              <Col xs="12" sm="12" md="12" lg="6">
                <img className="img-fluid" src={mockupCli} />
              </Col>
            </LandingRow>

            <LandingRow className="my-3 py-3 row-grey">
              <Col xs="12" sm="12" md="12" lg="6">
                <h3>Issuer Desktop Client</h3>
                <p>
                  We want to create a desktop client that makes maintaining and
                  issuing an asset even easier than using the CLI.
                  <br />
                  Additionally, the desktop client will be used to provide help
                  when setting up new mobile wallets for customers. It will be
                  the frontend for the Analytics server, so an issuer has
                  everything in place to make their asset successful.
                  <br />
                  <i>NOTE: This is a planned feature and not available yet.</i>
                </p>
              </Col>
            </LandingRow>
          </div>
        </main>
      </div>
    );
  }
}
