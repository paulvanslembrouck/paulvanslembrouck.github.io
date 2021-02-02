// Import lit-html functions
//import { html, render } from '../../node_modules/lit-html/lit-html.js';
import {html, render} from 'https://unpkg.com/lit-html?module';

// Define a template function
const myHeader = title =>
  html`
	<div id="header" class="header">
		<div class="container-fluid">
			<div id="bluebar-left">
				<a href="index.html"><span class="header-tool-name">Pathname > Pathname</span></a>
			</div>	

			<div id="bluebar-right"><img src="../bigfoot/img/bluebar-right.png" ></div>
		</div>
	</div>
	`;

var targetHeader = document.querySelector('#headerWrapper');
render(myHeader(''), targetHeader);

const sideNav = page =>
  html`
<div class="panel panel-default">
		<a class="logo"> 
			<button id="btn-main-sidebar" type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></button> 
			Ridgeline ${page}
		</a>
	</div>
	<div class="panel panel-default">		
				<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> 
					<span class="glyphicon glyphicon-search"></span> Search</a>
	        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			 	    <div class="list-group">
					  <a href="#" class="list-group-item active">Trade Orders</a>
					  <a href="#" class="list-group-item">Directory</a>
					  <a href="#" class="list-group-item">Accounting</a>
					  <a href="#" class="list-group-item">Securities</a>
					</div>
			</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-star"></span> Favorites</a>
				<div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
					<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>

		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-home"></span> Dashboard</a>
			<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-user"></span> Directory</a>
			<div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-resize-horizontal"></span> Trading</a>
			<div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="trade.html" class="list-group-item">Trade Order</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-folder-open"></span> Portfolio Construction</a>
			<div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-tasks"></span> Reporting</a>
			<div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-equalizer"></span> Accounting</a>
			<div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="dividend.html" class="list-group-item">Post Dividend</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-hdd"></span> Data</a>
			<div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	<div class="panel panel-default">
		<a class="section-name collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
			<span class="glyphicon glyphicon-cog"></span> System Setup</a>
			<div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div class="list-group">
					<a href="#" class="list-group-item">5/12 Trades</a>
					<a href="#" class="list-group-item">May Reconcilliation</a>
					<a href="#" class="list-group-item">New Securities</a>
					<a href="#" class="list-group-item">Trades in Progress</a>
					<a href="#" class="list-group-item">Performance Report</a>
				</div>
		</div>
	</div>
	`;

var targetNav = document.querySelector('#navWrapper');
render(sideNav(''), targetNav);


const myTemplate = name =>
	html`
	<p>Hello ${name}, this is a test paragraph</p>
	`;

var targetTest = document.querySelector('#test');
render(myTemplate('Paul'), targetTest);

