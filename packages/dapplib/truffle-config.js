require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain come gesture lock system genuine'; 
let testAccounts = [
"0x56857bb6a12eae80934aab3091efd8a9b885ee0ded9e14e46d053e5d3dabc4bf",
"0xdbfcd2a14157ffab1fe5fcc10956f7cab29f25cb0eed9e8b484a8841f0a249e8",
"0x8a1ea28533a0d2ee7b0e03f006983d20643e2a0538f3488425dcb932cb6b4644",
"0x39eceec9ec2f524b2a68ef4362fc9897ac157151be4c21d2cb85642646e5c946",
"0x88fadaa22006f64e30f9b7e23ed4d517185e93e906e2162d6159a0fbc190aefb",
"0x3338091e8064b1d4b87ff53d2c831ebd6b0ac6dd5a0c5ec974a2a271d92ff737",
"0xe114c69a393c8ff620dd73f760e7fda9f8c4f6c74f344c764207f08eec1def79",
"0x62105d2e1e93975caf502035a459a706aaeaf94703640903189c6b68510324e5",
"0x28def374adb7b9281d19e53755c4b3e6e11d07eda615ea558cc469136c01a32d",
"0xf4fac605c84fbfb65e081d6fb493e9035ea635e20a433fb7805b9272097ecb73"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

