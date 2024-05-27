# Shopify-DL-2.0-Public-App
Shopify DiamondLink 2.0 Public Application



### After Cloning the Repository

Follow these steps to set up the project:

### Backend Setup

Step 1: Open the folder in VS Code.

Step 2: In the root directory, install the node modules by running the following command:

	npm i or npm i --force

Step 3: Once installed, you will see the `node_modules` folder in the root directory.

Step 4: Download the `.env` file from the DL 2.0 server and add it to your local system.

Step 5: Add `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET` to the `shopify-app.php` file located at `../Shopify-DL-2.0-Public-App/config/shopify-app.php`.

	Example:

	/*
	|--------------------------------------------------------------------------
	| Shopify API Key
	|--------------------------------------------------------------------------
	| This option is for the app's API key.
	|
	*/

	'api_key' => env('SHOPIFY_API_KEY', 'XXXXXXXXXX'), // Replace with your actual key

	/*
	|--------------------------------------------------------------------------
	| Shopify API Secret
	|--------------------------------------------------------------------------
	|
	| This option is for the app's API secret.
	|
	*/

	'api_secret' => env('SHOPIFY_API_SECRET', 'XXXXXXXXXX'), // Replace with your actual key

Step 6: If you are working locally, you might need the `vendor` folder for Laravel. Currently, it is managed server-side, but if needed, you can download it from the server's root folder.



### Uploading Backend Build

Step 1: If changes are made inside the `resource` folder, you need to upload the build file.

Step 2: Open your code in VS Code.

Step 3: In the root folder, run the command:

	npm run build

Step 4: The build file will be generated inside the `public` folder at `../public/build`.

Step 5: Upload the build folder to the server. Navigate to the root folder on FTP > `public` > upload the build folder from your local system. Please back up the previous build file.



### Frontend Setup And How To Upload Build

Step 1: Go to the DL 2.0 Frontend folder.

Step 2: In the DL 2.0 Frontend folder, install node modules by running:

	npm i or npm i --force

Step 3: Navigate to the DL 2.0 Frontend folder using the terminal:

	cd DL\ 2.0\ Frontend

Step 4: Add the `.env` file to the DL 2.0 Frontend folder with the following line:

	REACT_APP_URL=https://gfdiamondlink.com/api

Step 5: Run the command to start the frontend:

	npm start

	This will show the frontend view on your local system.

Step 6: After making changes, run the command to build the frontend:

	npm run build

Step 7: This will create JS and CSS files inside the `build` folder.

Step 8: Upload these JS and CSS files to the server.

	Paths for JS:

	/public_html/public/static/js

	Paths for CSS:

	/public_html/public/static/css

Step 9: Rename the JS and CSS files to `main.js` and `main.css` respectively.


