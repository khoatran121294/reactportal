## React portal project based on create-react-app

- The source code structure is partly refered from this [repository](https://github.com/huynhsamha/create-react-app-config). Many thanks for Author's contribution.
- Beside that, I changed some modules that I find they are better than current modules such as:
	+ redux-thunk -> redux-saga.
	+ remove services folder (APIs will be call directly in Sagas).
	+ remove environments folder (I think it's not neccessary if we don't use NodeJS for Backend side).
	+ create helpers folder to store helper class such as API Request, Convertor, Helper functions, ...
	+ create store folder to config redux modules.
	+ create assets folder to store static resources such as images, fonts, logo, icon,...
	+ refactor eslint config file, it's very difficult and hardly for starters.
	+ use axios module instead of built-in fetch API.
	+ integrate module google-map-react.
	+ integrate module react-dropzone: upload multiple files simply with drap/drop or choose file normally.
	+ integrate react-intl with redux (change language dynamically).
	+ ....