import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import View from '../../components/view';
import Link from '../../components/link';
import NavigationBar from '../../components/navigationbar';
import Question from '../../components/question';
import NodeInfo from '../../components/nodeinfo';
import BackGround from '../../components/background';
import {
  bitcoinLnd,
  litecoinLnd,
  liquidbitcoinLnd,
  rbtclnd,
  lnurlnd,
  bitcoinLndOnion,
  litecoinLndOnion,
  liquidbitcoinOnion,
  rbtcOnion
} from '../../constants';

const styles = theme => ({
  wrapper: {
    flex: '1 0 100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '42px',
    color: theme.colors.white,
  },
  questionTab: {
    backgroundColor: theme.colors.white,
    minWidth: '820px',
    maxWidth: '920px',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
    paddingTop: '10px',
    paddingBottom: '10px',
    '@media (max-width: 425px)': {
      justifyContent: 'center',
      minWidth: '100%',
      maxWidth: '100%',
    },
  },
});

const twitterLink = 'https://twitter.com/porticoexchange';

class Faq extends React.Component {
  render() {
    const { classes } = this.props;

    document.body.style.overflowX = 'hidden';

    return (
      <BackGround>
        <NavigationBar />
        <View className={classes.wrapper}>
          <View className={classes.titleWrapper}>
            <h1 className={classes.title}>FAQ&apos;s</h1>
          </View>
          <View className={classes.questionTab}>
            <Question
              title={style => <h1 className={style}>What is Portico?</h1>}
              content={style => (
                <p className={style}>
                  Portico Exchange is an instant and non custodial exchange with focus
                   in cross chain between layers Bitcoin with Lightning Network, Layer one and Liquid Network.
                   <br /> <br />
                  Please note that this product is experimental.{' '}
                  <Link to={twitterLink} text={'contact us'} />.
                </p>
              )}
            />
            <Question
              title={style => (
                <h1 className={style}>
                  Why should one use a non custodial exchange?
                </h1>
              )}
              content={style => (
                <p className={style}>
                  Non custodial exchanges give you full control over your funds.
                  All trades on Portico Exchange are executed in a way that we cannot steal
                  any money from you. Period.
                  <br />
                  <br />
                  Either the trade happens entirely and you get the exact amount
                  of the asset you were promised or you will be able to do a
                  refund. This concept is called <i>atomicity</i> and it is
                  achieved by Portico with so-called <i>Submarine Swaps</i>. You
                  can read more about them in{' '}
                  <Link
                    to={
                      'https://medium.com/boltzhq/submarine-swaps-c509ce0fb1db'
                    }
                    text={'this blog post'}
                  />
                  {'.'}
                  <br />
                  <br />
                  If you are <i>really</i> technical you can proof read our
                  source code and verify that the claims above are valid because
                  everything is open source and can be found on{' '}
                  <Link
                    to={'https://github.com/porticoexchange'}
                    text={'our GitHub'}
                  />
                  . Also we will soon add a version of our frontend that you can
                  host yourself and connect to your own node easily.
                </p>
              )}
            />
            <Question
              title={style => (
                <h1 className={style}>What wallets are supported by Portico Exchange?</h1>
              )}
              content={style => (
                <p className={style}>
                  All regular and Lightning wallets are supported by Portico until LNURL as Zebedee.
                  Although we encourage you to run a full node and manage your
                  own keys, there are custodial wallets solutions, like{' '}
                  <Link to={'https://bluewallet.io/'} text={'BlueWallet'} />,
                  that work out of the box and can make testing Portico very easy.
                </p>
              )}
            />
            <Question
              title={style => (
                <h1 className={style}>
                  How to open Lightning channels with Portico Exchange?
                </h1>
              )}
              content={style => (
                <p className={style}>
                  We appreciate any channels you open with our Lightning nodes
                  and <Link to={twitterLink} text={'on request'} /> we will also
                  open one to you:
                  <NodeInfo
                    name={'BTC LND node'}
                    size={150}
                    uri={bitcoinLnd}
                    onionUri={bitcoinLndOnion}
                  />
                  <NodeInfo
                    name={'LTC LND node'}
                    size={150}
                    uri={litecoinLnd}
                    onionUri={litecoinLndOnion}
                  />
                </p>
              )}
            />
            <Question
              title={style => (
                <h1 className={style}>How are our fees calculated?</h1>
              )}
              content={style => (
                <p className={style}>
                  Our fees consist of the <i>miner fee</i> that is needed for
                  the onchain parts of the Submarine Swaps and an additional fee
                  which is a percentage of the traded amount and goes to our
                  pocket for providing a <i>(hopefully)</i> useful service to
                  our users.
                </p>
                title={style => (
                <h1 className={style}>Acknowledgements</h1>
              )}
              content={style => (
                <p className={style}>
                  Portico Exchange is a fork of <Link to={'https://boltz.exchange'} text={'Boltz'} />. 
                  We are a team of independent developers working to unite RSK, Liquid Network, Lightning Network, Layers third
                  and Bitcoin (On Chain) as Exchange Decentralized.
                </p>
              )}
            />
          </View>
        </View>
      </BackGround>
    );
  }
}

Faq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Faq);
