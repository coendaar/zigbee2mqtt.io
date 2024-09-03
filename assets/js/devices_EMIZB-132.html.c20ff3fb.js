"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84336],{25774:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>f,data:()=>v});var a=o(86904);const i=(0,a.Lk)("h1",{id:"develco-emizb-132",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#develco-emizb-132"},[(0,a.Lk)("span",null,"Develco EMIZB-132")])],-1),n=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EMIZB-132")],-1),c=(0,a.Lk)("td",null,"Vendor",-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Wattle AMS HAN power-meter sensor")],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"power, power_reactive, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, linkquality")],-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EMIZB-132.png",alt:"Develco EMIZB-132"})])],-1),u=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="configuring-interface-mode" tabindex="-1"><a class="header-anchor" href="#configuring-interface-mode"><span>Configuring interface mode</span></a></h3><p>In order to get measurements, after pairing the device you need to configure the interface mode.</p><p>To do this send to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;interface_mode&quot;: &quot;INTERFACE_MODE&quot;}</code>.</p><p>Possible values for <code>INTERFACE_MODE</code> are:</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>norwegian_han</code></td><td>Norwegian HAN</td></tr><tr><td><code>norwegian_han_extra_load</code></td><td>Norwegian HAN – Enable extra load. This is need to enable Adion meter communication</td></tr><tr><td><code>aidon_meter</code></td><td>Aidon Meter supporting Norwegian HAN HW interface. SW protocol is Aidon Manufacture Specific</td></tr><tr><td><code>kaifa_and_kamstrup</code></td><td>Kaifa meter and Kamstrup meters running old firmware</td></tr></tbody></table><p>Example of payload: <code>{&quot;interface_mode&quot;: &quot;norwegian_han_extra_load&quot;}</code></p><h3 id="not-getting-measurements" tabindex="-1"><a class="header-anchor" href="#not-getting-measurements"><span>Not getting measurements</span></a></h3><p>In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.</p><p>Related issues:</p><ul><li>https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035</li><li>https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',12),p=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),h=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_b_calibration</code>: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_b_precision</code>: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_b_calibration</code>: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_b_precision</code>: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_c_calibration</code>: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_c_precision</code>: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_c_calibration</code>: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_c_precision</code>: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Total active power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-reactive-numeric" tabindex="-1"><a class="header-anchor" href="#power-reactive-numeric"><span>Power reactive (numeric)</span></a></h3><p>Total reactive power. Value can be found in the published state on the <code>power_reactive</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric"><span>Current phase B (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric"><span>Voltage phase B (numeric)</span></a></h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric"><span>Current phase C (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric"><span>Voltage phase C (numeric)</span></a></h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),m={},f=(0,o(22652).A)(m,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[n,(0,a.Lk)("tbody",null,[r,(0,a.Lk)("tr",null,[c,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Develco"},{default:(0,a.k6)((()=>[(0,a.eW)("Develco")])),_:1})])]),s,l,d])]),u,(0,a.Lk)("p",null,[(0,a.eW)("This device supports OTA updates, for more information see "),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>[(0,a.eW)("OTA updates")])),_:1}),(0,a.eW)(".")]),p,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/EMIZB-132.html","title":"Develco EMIZB-132 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco EMIZB-132 control via MQTT","description":"Integrate your Develco EMIZB-132 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-03-20T17:24:57.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring interface mode","slug":"configuring-interface-mode","link":"#configuring-interface-mode","children":[]},{"level":3,"title":"Not getting measurements","slug":"not-getting-measurements","link":"#not-getting-measurements","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Power reactive (numeric)","slug":"power-reactive-numeric","link":"#power-reactive-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current phase B (numeric)","slug":"current-phase-b-numeric","link":"#current-phase-b-numeric","children":[]},{"level":3,"title":"Voltage phase B (numeric)","slug":"voltage-phase-b-numeric","link":"#voltage-phase-b-numeric","children":[]},{"level":3,"title":"Current phase C (numeric)","slug":"current-phase-c-numeric","link":"#current-phase-c-numeric","children":[]},{"level":3,"title":"Voltage phase C (numeric)","slug":"voltage-phase-c-numeric","link":"#voltage-phase-c-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725387798000},"filePathRelative":"devices/EMIZB-132.md"}')}}]);