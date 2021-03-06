/*******************************************************************************
 * Copyright (c) 2015, Institute for Pervasive Computing, ETH Zurich.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the Institute nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE INSTITUTE AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE INSTITUTE OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * This file is part of the OMA LWM2M DevKit.
 *******************************************************************************/
/**
 * \file Main script file for the LWM2M DevKit.
 * 
 * \author Matthias Kovatsch <kovatsch@inf.ethz.ch>
 */

Lwm2mDevKit.Tooltips = { };

Lwm2mDevKit.Tooltips.enabled = true;
Lwm2mDevKit.Tooltips.finish = false;

Lwm2mDevKit.Tooltips.steps = [
  	{
		"tool": "button_load_device",
		"tip": "Press 'H' to \n load the next tooltip or disable tooltips in the <html:b>preferences</html:b> (upper right \n corner).",
		"action": "this.hidePopup(); Lwm2mDevKit.Tooltips.nextStep();",
		"offsetx": 180
	},
	{ // 1
		"tool": "button_load_device",
		"tip": "First \n load a virtual <html:b>LWM2M Client</html:b>. \n Press 'E' to directly load the Example Client.",
		"action": "document.getElementById('example_client').click();"
	},
	{ // 2
		"tool": "tree_device",
		"tip": "This tree \n shows the available \n <html:b>Objects</html:b> and \n <html:b>Object Instances</html:b>. Browse them.",
		"action": "Lwm2mDevKit.Tooltips.clickThrough(event);Lwm2mDevKit.Tooltips.clickThrough(event);"
	},
	{ // 3
		"tool": "button_registration",
		"tip": "Add the \n 'Timezone' Resource under <html:b>Device (3) / 0</html:b>. \n 'C' toggles the rows to create Resources and Instances.",
		"action": null,
		"offsety": 10,
		"offsety": 90
	},
	{ // 4
		"tool": "button_preferences",
		"tip": "Add an \n <html:b>Instance with ID 2</html:b> \n to the \n <html:b>LWM2M Server</html:b> Object (1).",
		"action": "",
		"offsetx": -445,
		"offsety": 68
	},
	{ // 5
		"tool": "button_registration",
		"tip": "Open the \n <html:b>Registration Interface</html:b> to register with the LWM2M Server.",
		"action": "this.hidePopup();document.getElementById('button_registration').click();"
	},
	{ // 6
		"tool": "endpoint_name",
		"tip": "Parameters \n sent on registration: the <html:b>Endpoint Client Name</html:b> is mandatory. Press 'Register' or \n hotkey 'R'.",
		"action": null
	},
	{ // 7
		"tool": "button_service",
		"tip": "The Client is registered. Check \n the <html:b>LWM2M Server</html:b>, \n then click 'Device \n Management &amp; \n Service En.'",
		"action": "document.getElementById('panel_registration').hidePopup(); document.getElementById('button_service').click();"
	},
	{ // 8
		"tool": "log_operations",
		"tip": "Requests from \n the <html:b>LWM2M Server</html:b> are logged here. Use it to perform Read, Write, and Execute operations.",
		"action": null
	},
	{ // 9
		"tool": "button_service",
		"tip": "Open the \n <html:b>Device Management \n &amp; \n Service Enablement</html:b> interface.",
		"action": "document.getElementById('button_service').click();"
	},
	{ // 10
		"tool": "log_server_request_options",
		"tip": "Click on one \n of the operations to see the details of the CoAP messages.",
		"action": null,
		"offsety": -100
	},
	{ // 11
		"tool": "button_reporting",
		"tip": "The 'Information Reporting' interface shows all active <html:b>Observe</html:b> operations. Open it.",
		"action": "document.getElementById('panel_service').hidePopup(); document.getElementById('button_reporting').click();"
	},
	{ // 12
		"tool": "log_operations_reporting",
		"tip": "<html:b>Observe</html:b> and \n <html:b>Notify</html:b> operations \n are logged here. \n Observe a Resource from the LWM2M Server.",
		"action": null
	},
	{ // 13
		"tool": "log_operations_reporting",
		"tip": "Click on one \n of the operations to see the details of the CoAP messages.",
		"offsetx": 200
	},
	{ // 14
		"tool": "tree_device",
		"tip": "Select the \n Object Instance of the Resource the LWM2M Server is observing.",
		"action": null
	},
	{ // 15
		"tool": "value_resource_notify",
		"tip": "Use the \n 'Notify' button to manually trigger a notification of \n the observed \n resource.",
	},

	//"Lwm2mDevKit.Tooltips.show(Lwm2mDevKit.Tooltips.steps.length-1);"
	{ // end
		"tool": "button_load_device",
		"tip": "Done! \n Click me to \n disable tooltips. \n Use the preferences or hotkey 'H' to change this.",
		"action": "Lwm2mDevKit.Tooltips.enabled = false; Lwm2mDevKit.prefManager.setBoolPref('extensions.lwm2m-devkit.show-tooltips', false);",
		"offsetx": 180
	}
];

Lwm2mDevKit.Tooltips.clickThrough = function(event) {
	document.getElementById('tooltip').style.display = 'none';
	let under = document.elementFromPoint(event.clientX, event.clientY); 
	if (under.id=='tree_children') Lwm2mDevKit.onTreeClicked(event);
	else under.click(event);
	document.getElementById('tooltip').style.display = '';
};

Lwm2mDevKit.Tooltips.show = function(step) {
	
	let tip = document.getElementById('tooltip');
	let text = document.getElementById('tooltiptext');
	let tool = document.getElementById(Lwm2mDevKit.Tooltips.steps[step]['tool']);
	
	text.textContent = Lwm2mDevKit.Tooltips.steps[step]['tip'];
	tip.addEventListener('click', Lwm2mDevKit.Tooltips.steps[step]['action']);
	
	if (step==8) tip.removeEventListener('click', Lwm2mDevKit.Tooltips.clickThrough);
	
	let x = 60;
	let y = -30;
	
	if (Lwm2mDevKit.Tooltips.steps[step]['offsetx']) x += Lwm2mDevKit.Tooltips.steps[step]['offsetx'];
	if (Lwm2mDevKit.Tooltips.steps[step]['offsety']) y += Lwm2mDevKit.Tooltips.steps[step]['offsety'];
	
	tip.openPopup(tool, 'overlap', x, y, false, true, null);
};

Lwm2mDevKit.Tooltips.nextStep = function() {
	document.getElementById('tooltip').hidePopup();
	
	if (!Lwm2mDevKit.Tooltips.enabled) return;
	
	var step = -1;
	
	// rules to identify the next step
	if (Lwm2mDevKit.localAddr==null) {
		step = 0;
	} else if (Lwm2mDevKit.client==null) {
		step = 1;
	} else if (document.getElementById('box_resource_values').hidden && document.getElementById('box_object_definitions').hidden) {
		step = 2;
	} else if (Lwm2mDevKit.client.instances[3][0][15]===undefined || Lwm2mDevKit.client.instances[1][2]===undefined) {
		if ((document.getElementById('box_object_definitions').hidden && Lwm2mDevKit.client.instances[3][0][15]===undefined) || Lwm2mDevKit.client.instances[1][2]!==undefined) step = 3;
		else if ((document.getElementById('box_resource_values').hidden && Lwm2mDevKit.client.instances[1][2]===undefined) || Lwm2mDevKit.client.instances[3][0][15]!==undefined) step = 4;
		else step = 2;
	} else if (Lwm2mDevKit.registrationHandle==null) {
		if (document.getElementById('panel_registration').state=='closed') step = 5;
		else step = 6;
	} else if (Lwm2mDevKit.registrationHandle!=null && document.getElementById('log_operations').itemCount==0) {
		if (document.getElementById('panel_service').state=='closed') step = 7;
		else step = 8;
	} else if (Lwm2mDevKit.registrationHandle!=null && !document.getElementById('log_server_request_header_type').getAttribute('label')) {
		if (document.getElementById('panel_service').state=='closed') step = 9;
		else step = 10;
	} else if (Lwm2mDevKit.registrationHandle!=null && document.getElementById('log_operations_reporting').itemCount==0) {
		if (document.getElementById('panel_reporting').state=='closed') step = 11;
		else step = 12;
	} else if (Lwm2mDevKit.registrationHandle!=null && !document.getElementById('log_notify_header_type').getAttribute('label')) {
		if (document.getElementById('panel_reporting').state=='closed') step = 11;
		else step = 13;
	} else if (Lwm2mDevKit.registrationHandle!=null && (document.getElementById('box_resource_values').hidden || Lwm2mDevKit.getObjectAddress(Lwm2mDevKit.InformationReporting.relations[Object.keys(Lwm2mDevKit.InformationReporting.relations)[0]].message)[1]!=document.getElementById('object_instance_id').getAttribute('label'))) {
		step = 14;
	} else if (Lwm2mDevKit.registrationHandle!=null && !Lwm2mDevKit.Tooltips.finish) {
		step = 15;
	} else if (Lwm2mDevKit.Tooltips.finish) {
		step = Lwm2mDevKit.Tooltips.steps.length - 1;
	}
	
	// delay execution to ensure tooltip on top of other panels
	if (step >= 0) window.setTimeout(
			function() {
				Lwm2mDevKit.Tooltips.show(step);
			}, 0);
};

Lwm2mDevKit.Tooltips.help = function() {
	
	if (!Lwm2mDevKit.Tooltips.enabled) {
		if (confirm('Enable tooltips?') ) {
			Lwm2mDevKit.Tooltips.enabled = true;
		} else {
			return;
		}
	}
	
	Lwm2mDevKit.Tooltips.nextStep();
};
