import "./App.css";
import { useMemo } from "react";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import ex1 from './img/Ex1.jpg';
import ex2 from './img/ex2.jpg';
import ex3 from './img/ex3.jpg';
import mlogo from './img/mlogo.jpg';

import 'react-aspect-ratio/aspect-ratio.css'
import AspectRatio from 'react-aspect-ratio'; // Deprecated: if you are using React <= 15.6

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";



const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  return (
    <div>
      <div id="mobileNavContainer" className="mobile-nav">
        <div className="mobile-nav-close-button">
          <img src="/icon/close.svg" alt="" onClick={toggleMenu} />
        </div>
        <ul>
          <li>

            <img className="mobile-nav-logo" src={'/img/logo.jpg'} width={50} height='auto'  alt="" />
          </li>
          <li>
            <a href="/#link1" onClick={toggleMenu}>
              Mint
            </a>
          </li>
          <li>
            <a href="/#link2" onClick={toggleMenu}>
              Examples
            </a>
          </li>
          <li>
            <a href="/#link3" onClick={toggleMenu}>
              FAQs
            </a>
          </li>
          <li>
            <a href="https://twitter.com/@Noxilous" onClick={toggleMenu}>
              Artist's Profile
            </a>
          </li>
          <li>
            <div className="social-icons">
              <a href="https://twitter.com/@NFTopiaWorld" target="_blank" rel="noreferrer">
                <img className="nav-social" src="/icons/twitter.svg" alt="" />
              </a>
              <a href="https://discord.gg/HDxBGxGQNq" target="_blank" rel="noreferrer">
                <img className="nav-social" src="/icons/discord.svg" alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <nav>
        <div className="nav-container">
          <img className="nav-logo" src="/img/logo.jpg" height={125} alt="" />
          <a className="hide-800" href="/#link1">
            Mint
          </a>
          <a className="hide-800" href="/#link2">
            Examples
          </a>
          <a className="hide-800" href="/#link3">
            FAQs
          </a>
          <a className="hide-800" href="https://twitter.com/@Noxilous">
            Artist's Profile
          </a>
          <div className="social-icons hide-800">
            <a href="https://twitter.com/@NFTopiaWorld" target="_blank" rel="noreferrer">
              <img className="nav-social" src="/icons/twitter.svg" alt="" />
            </a>
            <a href="https://discord.gg/HDxBGxGQNq" target="_blank" rel="noreferrer">
              <img className="nav-social" src="/icons/discord.svg" alt="" />
            </a>
          </div>
        </div>
      </nav>
      <div className="content-wrapper">
        <header className="card" id="link1">
          <div style={{ padding: "0 24px 0 24px 0" }}>
            <h3 className="text-secondary-color">Welcome To</h3>
            <h1 className="pb-3">Sol Citizens</h1>
            <p className="text-secondary-color">
              The Sol Citizen community is an NFT collection
              of 1000 unique & exclusive PFP avatars for your use,
              where minting them on the Solana Blockchain costs
              0.5 SOL excluding fees.
            </p>
          </div>
          <div>
            <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Minter
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ThemeProvider>
          </div>
        </header>

        <div id="link2" className="container">
          This is a collection that includes a diverse selection of women, men, & non-binary avatars
          for your PFPs, Sol Citizens is one of the very few NFT collections that brings support for non-binary &
          any binary genders.
        </div>

        <div id="link3" className="container card">
          <h1 className="pb-3">Some of our citizens</h1>
          <img src={ex1} height={'250rem'} width={'250rem'} style={{ marginRight: '2rem' }} alt={''}/>
          <img src={ex2} height={'250rem'} width={'250rem'} style={{ marginRight: '2rem' }} alt={''}/>
          <img src={ex3} height={'250rem'} width={'250rem'}  alt={''}/>

        </div>

        <div id="link4" className="container faq">
          <h1 style={{ padding: "0 0 24px 0" }}>FAQ</h1>
          <div>
            <h4>Where can we sell our Citizens?</h4>
            <p>
              Currently we do not have a spot where you can sell your citizens, but we will most likely get a spot on Digitaleyes.
            </p>

            <hr />
          </div>

          <div>
            <h4>Why is the floor so low?</h4>
            <p>
              This collection was created in order to supply people with high quality PFPs to use on any platform,
              We also cannot control what the floor price is, as it is completely controlled by YOU.
            </p>

            <hr />
          </div>

          <div>
            <h4>Who is managing this project?</h4>
            <p>
              All of us are working over at <a href="https://twitter.com/@NFTopiaWorld">NFTopia.</a>
            </p>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
