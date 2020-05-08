// Import lit-html functions
//import { html, render } from '../../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';

// Define a template function
const myHeader = title =>
  html`
	<div id="header" class="header">
		<div class="container-fluid">
			<div id="bluebar-left">
				<img src="../bigfoot/img/tool-logo.png" >
				<a href="index.html"><span class="header-tool-name">Tools UI: ${title}</span></a>
			</div>	

			<div id="bluebar-right"><img src="../bigfoot/img/bluebar-right.png" ></div>
		</div>
	</div>


	`;

var targetHeader = document.querySelector('#headerWrapper');
render(myHeader('test title'), targetHeader);


const myTemplate = name =>
	html`
	<p>Hello ${name}, this is a test paragraph</p>
	`;

var targetTest = document.querySelector('#test');
render(myTemplate('Paul'), targetTest);
