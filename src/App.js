import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from './redux/blockchain/blockchainActions'
import { fetchData } from './redux/data/dataActions'
import * as s from './styles/globalStyles'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i1 from './assets/images/1.png'
//import banner from './assets/images/newimage.jpeg'
import goat from './assets/images/goatTeaser.png'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import './AppStyles.css'

export const Roadmap = styled.img`
  width: 80%;
`

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 300px;
  cursor: pointer;
  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);
  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);
  }
`

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: column;
  }
`

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`

function App() {
  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain)

  const [selectedAmount, setSelectedAmount] = React.useState(1);

  const handleChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const data = useSelector((state) => state.data)
  const [feedback, setFeedback] = useState(
    'What Personality will your Goat have?',
  )
  const [claimingNft, setClaimingNft] = useState(false)

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return
    }
    setFeedback('Preparing your Troop NFT for deployment...')
    setClaimingNft(true)
    blockchain.smartContract.methods
      .mint( _amount)
      .send({
        //gasLimit: '285000',
        to: '0x3c1220Dc26f85F02D69A790AdE03E619F5C32582', //change this
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.03 * _amount).toString(),
          'ether',
        ),
      })
      .once('error', (err) => {
        console.log(err)
        setFeedback('It seems the transaction was cancelled.')
        setClaimingNft(false)
      })
      .then((receipt) => {
        setFeedback(
          'Woohoo! You just helped 13 families! Visit Opensea.io to view your randomly generated NFT!',
        )
        setClaimingNft(false)
        dispatch(fetchData(blockchain.account))
      })
  }

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))
    }
  }

  useEffect(() => {
    getData()
  }, [blockchain.account])
  //changine of the website happens here!!!!!!
  return (
    <s.Screen style={{ backgroundColor: '#313639' }}>
      <s.Container flex={1} ai={'center'}>
        <div className='header-text'>
          Welcome to Goat Troops Infantry…
        </div>
        <s.SpacerMedium />
        <img className="banner-img" src={goat} />
        <s.Container jc={'center'} ai={'center'}>
          <s.TextTitle
            style={{
              //this will be the header image
              textAlign: 'center',
              fontSize: 28,
              fontWeight: 'bold',
              margin: 40,
            }}
          >
            
          </s.TextTitle>
        </s.Container>
        <ResponsiveWrapper flex={1} style={{ padding: 12 }}>
          <s.Container flex={1} jc={'center'} ai={'center'}>
            <StyledImg alt={'example'} src={goat} />
            <s.SpacerMedium />
            <s.TextTitle
              style={{ textAlign: 'center', fontSize: 26, fontWeight: 'bold' }}
            >
              {data.totalSupply}/13000
            </s.TextTitle>
          </s.Container>
          <s.SpacerMedium />
          <s.Container
            flex={1}
            jc={'center'}
            ai={'center'}
            style={{ backgroundColor: '#313639', padding: 12 }}
          >
            {Number(data.totalSupply) == 13000 ? (
              <>
                <s.TextTitle style={{ textAlign: 'center' }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: 'center' }}>
                  You can still buy and trade Goat Troops NFTs on{' '}
                  <a
                    target={''}
                    href={'https://testnets.opensea.io/collection/trooptest'} //change this
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: 'center' }}>
                Goat Troops Infantry is a collection of 13,000 Goats training for battle on the Ethereum blockchain. Donations will be made to the families affected
                 by the terrorist attack during the evacuation in Afghanistan. 
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.SpacerXSmall />
                <s.SpacerXSmall />
                <s.SpacerLarge />
                <s.TextTitle style={{ textAlign: 'center' }}>
                  1 Troop NFT costs .03 ETH
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: 'center' }}>
                  -excluding gas fee-
                </s.TextDescription>
                <s.SpacerLarge />
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: 'center' }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                {blockchain.account === '' ||
                blockchain.smartContract === null ? (
                  <s.Container ai={'center'} jc={'center'}>
                    <s.TextDescription
                      style={{ textAlign: 'center' }}
                    ></s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault()
                        dispatch(connect())
                        getData()
                      }}
                    >
                      CONNECT WALLET
                    </StyledButton>
                    {blockchain.errorMsg !== '' ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{ textAlign: 'center' }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                  <div className="mui-select">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedAmount}
                        label="Amount"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  <s.Container ai={'center'} jc={'center'} fd={'row'}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault()
                        claimNFTs(selectedAmount)
                        getData()
                      }}
                    >
                      {claimingNft ? 'Busy...' : `Buy ${selectedAmount} NFT`}
                    </StyledButton>
                  </s.Container>
                    
                    </>
                )}
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.Container jc={'center'} ai={'center'} style={{ width: '70%' }}>
          <s.TextDescription style={{ textAlign: 'center', fontSize: 18 }}>
            Thank you! You are helping support the troops. 
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription style={{ textAlign: 'center', fontSize: 14 }}>
            Troop Rewarded to help the fallen soldiers #TroopNFT <p />
            *.*.*Launching_Soon*.*.*
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  )
}

export default App
