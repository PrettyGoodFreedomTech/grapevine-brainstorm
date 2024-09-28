the Pretty Good Freedom Technology NRD Template
=====
NRD: nostr, react, dashboard
-----

The is a free template for anyone who wants to make a nostr app in react using an admin / dashboard - style UI. It relies on the open source [nostr-hooks](https://github.com/ostyjs/nostr-hooks) by osty, as well as ndk and nostr-tools.

This repo was created using the following steps:

1. Fork of [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
2. Navigation reformatted, extraneous pages removed, to create [this template](https://github.com/PrettyGoodFreedomTech/coreui-admin-stripped)
3. Nostr functionality added, as described below

## nostr

```
npm install @nostr-dev-kit/ndk
npm install @nostr-dev-kit/ndk-cache-dexie
npm install @noble/hashes
npm install nostr-tools
npm install nostr-hooks@2.8.4
```

note: nostr-hooks 2.9.11 has problems with persistence of login 

added `src/helpers/nip19.js`
added `src/helpers/relays.js`
added `loginNostrHooks.js`

add `(reL)(l)oginFromLocalStorage` to `App.js`, without which `activeUser` would be null 

## Quick Start

- Clone the repo: `git clone https://github.com/PrettyGoodFreedomTech/grapevine-brainstorm.git`
- cd into the folder you just created

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

