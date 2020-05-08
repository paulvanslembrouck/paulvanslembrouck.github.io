// Import lit-html functions
//import { html, render } from '../../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';

// Define a template function
const myHeader = title =>
  html`
	<div id="header" class="header">
		<div class="container-fluid">
			<div id="bluebar-left">
				<a href="index.html"><span class="header-tool-name">Bigfoot${title}</span></a>
			</div>	

			<div id="bluebar-right"><img src="../bigfoot/img/bluebar-right.png" ></div>
		</div>
	</div>
	`;

var targetHeader = document.querySelector('#headerWrapper');
render(myHeader(''), targetHeader);

const myHeaderToggle = title =>
  html`
	<div id="header" class="header">
		<div class="container-fluid">
			<div id="bluebar-left">
				<button id="btn-main-sidebar" type="button" class="btn btn-light btn-lg">
					<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				</button>
				<a href="index.html"><span class="header-tool-name">Bigfoot${title}</span></a>
			</div>	

			<div id="bluebar-right"><img src="../bigfoot/img/bluebar-right.png" ></div>
		</div>
	</div>
	`;

var targetHeader = document.querySelector('#headerToggleWrapper');
render(myHeaderToggle(''), targetHeader);


const myTemplate = name =>
	html`
	<p>Hello ${name}, this is a test paragraph</p>
	`;

var targetTest = document.querySelector('#test');
render(myTemplate('Paul'), targetTest);

const myTemplate = name =>
	html`
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
	`;

var targetTest = document.querySelector('#test');
render(myTemplate('Paul'), targetTest);
