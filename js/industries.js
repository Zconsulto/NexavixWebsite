document.addEventListener("DOMContentLoaded", function () {
	// Extracting the 'tab' parameter from the URL
	const urlParams = new URLSearchParams(window.location.search);
	const tab = urlParams.get("tab");

	// Check if tab parameter is available
	if (tab) {
		loadContent(tab);
	}
	attachAccordionEventListeners();
});

function loadContent(tabId) {
	var contentDiv = document.getElementById("content");

	switch (tabId) {
		case "tab1":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/car7.jpg" alt="Manufacturing Industries Background">
            <div class="image-caption">Manufacturing <br><br>Optimized Manufacturing with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
      
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Unlock efficient production and operational transparency with SAP Business One.</span><br> Guiding your manufacturing towards
                    sustainable success and growth.</h2>
                </div>

                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Robust Inventory Management </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Inefficient Inventory Management: <br> Inconsistent stock levels and inaccurate data hinder streamlined production.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution</span> <br>
                                    Track and manage stock levels, orders, and production in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Unified Supply Chain Management </span></h3>
                                <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                        class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Complex Supply Chain Management: <br>Managing multiple suppliers, logistics, and quality control is
                                        challenging.</p>
                                        <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution</span> <br>Consolidate supplier data, manage contracts, and optimize procurement processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Advanced Data Analytics </span></h3>
                                <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Data Management and Utilization: <br> Fragmented data and lack of real-time insights to inform decision-making.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution</span> <br>Leverage real-time data and analytics to drive informed business decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Regulatory Compliance Assurance </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Regulatory Compliance and Quality Assurance: <br>
                                    Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                        <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution</span> <br>Automate and monitor compliance management to meet industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Customer Relationship Management </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                <p><span style="font-weight: bolder;">Challenge</span> <br><br>Unified Management of Customer Data, Sales, and Support: <br>
                                Managing customer orders, making products, and using resources efficiently.
</p>
                                    <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution</span> <br>Use SAP Business One's CRM to keep all customer info in one place, track sales easily, and handle customer service neatly and promptly, ensuring smooth interactions from sale to support.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Efficient Production Scheduling </span></h3> <span class="icon icon--24 icon--chevron"> <svg
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                <p><span style="font-weight: bolder;">Challenge</span> <br><br>Balancing Orders and Production with SAP Business One: <br>
                                Managing customer orders, making products, and using resources efficiently.
</p>
                                    <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution</span> <br>Use SAP Business One to easily keep track of orders, manage making products, and ensure resources are used well by taking advantage of its tools for organizing production and resources.
                                </p>
                            </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
			break;
		case "tab2":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind2.jpg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;">Wholsale <br><br>Streamlined Wholesale Distribution with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Elevate your wholesale operations to new heights.</span><br> SAP Business One empowers distributors with real-time insights, efficient inventory control, and seamless supply chain management, ensuring sustainable growth.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Intelligent Inventory Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Inventory Overstock and Understock Issues: <br> Balancing stock levels to avoid excess inventory and stock-outs remains a persistent challenge.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>
                            - Automated Stock-Level Monitoring: Implementing Automated Alerts to Efficiently Manage and Avoid Overstock and Stock-outs.  
                            <br>
                            <Br>
                            - Data-Driven Procurement: Utilize historical data to make informed purchasing decisions, aligning stock with demand.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Vendor Management Excellence </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Complex Vendor Relations: <br>Managing numerous vendor relationships, negotiations, and consistent product quality.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Centralized Vendor Data: Centralize all vendor data, negotiations, and contracts in one platform to streamline vendor interactions.
                            <br>
                            <Br>  
                            - Quality Control: Employ embedded analytics to assess vendor performance and ensure product quality consistency.
                            
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Accurate Demand Forecasting </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Demand Forecasting: <br> Anticipating market demand accurately to optimize inventory and sales strategies.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Predictive Analytics: Leverage predictive analytics to understand market trends and anticipate customer demand accurately.  
                            <br>
                            <br>
                            - Sales Forecasting: Use historical sales data to inform future sales strategies and optimize inventory.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Efficient Logistics and Shipping </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Logistics and Shipping Delays: <br>
                            Coordinating timely shipments, minimizing delays, and ensuring cost-effective logistics.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>
                                - Logistics Optimization: Utilize SAP B1 to coordinate efficient and timely shipping, reducing delays and managing costs.  
                                <br><br>
                                - Integration with Shipping Carriers: Integrate with various shipping carriers and platforms to streamline logistics management and tracking.
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Holistic Financial Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Integrated Financial Management: <br>
                    Combining sales, purchasing, and financial data for accurate and real-time financial insights.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br><br>- Unified Financial Data: Centralize financial operations in a single platform, ensuring consistency and real-time access to crucial financial data. 
                    <br><br> 
                    - Profitability Analysis: Leverage integrated data to analyze the profitability of products, customers, and regions, enabling informed strategic decisions.
                    
                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
`;
			break;
		case "tab3":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind3.jpeg" alt="Retail Industries Background">
            <div class="image-caption">Retail <br><br>Elevating Retail Success with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Synchronizing Inventory, Sales, and Customer Experiences</span><br> in a Dynamic Retail Environment with SAP B1.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Optimized Inventory Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Inventory Management: <br> Balancing accurate stock levels with demand without overstocking or stockouts.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>
                            - Intelligent inventory tracking and predictive analysis.
                            <br><br>
                            - Ensures optimal stock levels and reduces carrying costs.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Enhanced Customer Experiences </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Customer Experience: <br>Maintaining consistent and personalized customer experiences across all channels.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Customer Relationship Management (CRM) integration.
                            <br><br>
                            - Enable personalized and consistent customer interactions.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Strategic Data Management </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Data Utilization: <br> Effectively leveraging customer and sales data for strategic decision-making.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Comprehensive data analytics and reporting.
                            <br><br>
                            - Facilitates informed, data-driven decision-making.
                      </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Streamlined Supply Chains </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Supply Chain Management: <br>
                            Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>Use SAP Business One's Quality Control feature to systematically track and manage quality checks, ensuring products consistently meet regulatory standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Effective Staff Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Staff Management with SAP Business One: <br>
                    Coordinating staff schedules, training, and performance efficiently.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br><br>- Integrated HR and staff management tools.
                    <br><br>
                    - Enhances staff coordination and performance.
                    </p>
                        </div>
                    </div>
                </div>
                    <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Unified E-commerce Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br> E-commerce Integration with SAP Business One: <br>
                    Seamlessly integrating and managing online and offline sales channels.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br><br>- Omni-channel sales management and integration.
                    <br><br>
                    - Provides a seamless shopping experience across all sales channels.
                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        `;
			break;
		case "tab4":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind4.jpeg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;">Chemistry <br><br>Navigating the Chemical Industry's Complexities with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Enhancing Production Safety, Quality, and Compliance</span><br> In a Dynamic Market with SAP Business One</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Unified Regulatory Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Adherence: <br> Maintaining compliance with diverse and stringent global chemical regulations.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>
                            Enable cohesive compliance management through integrated data monitoring and reporting capabilities.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Enhanced Safety Monitoring </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br> Safety Protocols: <br> Ensuring the safety of processes, employees, and environmental practices.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>Implement advanced safety tracking and notification systems for preventative action.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Optimized Supply Chains </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Supply Chain Management: <br> Controlling a complex, oftentimes global, supply chain amidst variable market conditions.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>Use SAP Business One for clear views of your global supply chain, helping you manage inventory, orders, and suppliers easily, even in changing market conditions, to keep costs down and operations reliable.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Precision in Quality Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Quality Control: <br>
                            Maintaining consistent product quality while navigating resource variability.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>Utilize detailed data analysis to maintain product quality and implement improvements.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Efficient Costing Strategies </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Cost Management with SAP Business One: <br>
                    Effectively managing costs associated with raw materials, production, and logistics.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br> Leverage real-time financial insights to formulate cost-effective production strategies.
                    </p>
                    </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Innovation Support </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Innovation Demands: <br>
                            Staying competitive through consistent innovation in products and processes.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>Facilitate R&D with accurate data and streamlined project management tools.
                            </p>
                        </div>
                    </div>
                </div>
`;
			break;
		case "tab5":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind2.jpg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;">Wholsale <br><br>Streamlined Wholesale Distribution with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Elevate your wholesale operations to new heights.</span><br> SAP Business One empowers distributors with real-time insights, efficient inventory control, and seamless supply chain management, ensuring sustainable growth.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Robust Inventory Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Inefficient Inventory Management: <br> Inconsistent stock levels and inaccurate data hinder streamlined production.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>
                            Track and manage stock levels, orders, and production in real time.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Unified Supply Chain Management </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Complex Supply Chain Management: <br>Managing multiple suppliers, logistics, and quality control is
                                challenging.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>Consolidate supplier data, manage contracts, and optimize procurement processes.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Advanced Data Analytics </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Data Management and Utilization: <br> Fragmented data and lack of real-time insights to inform decision-making.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>Leverage real-time data and analytics to drive informed business decisions.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Regulatory Compliance Assurance </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Compliance and Quality Assurance: <br>
                            Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br>Automate and monitor compliance management to meet industry standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Customer Relationship Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Balancing Orders and Production with SAP Business One: <br>
                    Managing customer orders, making products, and using resources efficiently.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br>Use SAP Business One to easily keep track of orders, manage making products, and ensure resources are used well by taking advantage of its tools for organizing production and resources.
                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
`;
			break;
		case "tab6":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind2.jpg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;">Wholsale <br><br>Streamlined Wholesale Distribution with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Elevate your wholesale operations to new heights.</span><br> SAP Business One empowers distributors with real-time insights, efficient inventory control, and seamless supply chain management, ensuring sustainable growth.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Robust Inventory Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Inefficient Inventory Management: <br> Inconsistent stock levels and inaccurate data hinder streamlined production.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>
                            Track and manage stock levels, orders, and production in real time.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Unified Supply Chain Management </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Complex Supply Chain Management: <br>Managing multiple suppliers, logistics, and quality control is
                                challenging.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>Consolidate supplier data, manage contracts, and optimize procurement processes.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Advanced Data Analytics </span></h3>
                        <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Data Management and Utilization: <br> Fragmented data and lack of real-time insights to inform decision-making.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br>Leverage real-time data and analytics to drive informed business decisions.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Regulatory Compliance Assurance </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                        <div>
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Compliance and Quality Assurance: <br>
                            Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br>Automate and monitor compliance management to meet industry standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Customer Relationship Management </span></h3> <span
                            class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 24 24" version="1.1" class="">
                                <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                        <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                            <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                <path
                                                    d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                    id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> </span>
                    </div>
                    <div class="accordion__item-content">
                    <div>
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Balancing Orders and Production with SAP Business One: <br>
                    Managing customer orders, making products, and using resources efficiently.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br>Use SAP Business One to easily keep track of orders, manage making products, and ensure resources are used well by taking advantage of its tools for organizing production and resources.
                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
`;
			break;
		case "tab7":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind2.jpg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;">Wholsale <br><br>Streamlined Wholesale Distribution with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #898989;">Elevate your wholesale operations to new heights.</span><br> SAP Business One empowers distributors with real-time insights, efficient inventory control, and seamless supply chain management, ensuring sustainable growth.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Robust Inventory Management </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Inefficient Inventory Management: <br> Inconsistent stock levels and inaccurate data hinder streamlined production.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br>
                                    Track and manage stock levels, orders, and production in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Unified Supply Chain Management </span></h3>
                                <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                        class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Complex Supply Chain Management: <br>Managing multiple suppliers, logistics, and quality control is
                                        challenging.</p>
                                        <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br>Consolidate supplier data, manage contracts, and optimize procurement processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Advanced Data Analytics </span></h3>
                                <span class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Data Management and Utilization: <br> Fragmented data and lack of real-time insights to inform decision-making.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br>Leverage real-time data and analytics to drive informed business decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Regulatory Compliance Assurance </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                                <div>
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Compliance and Quality Assurance: <br>
                                    Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                        <p>&nbsp;</p>
                                        <p><span style="font-weight: bolder;">Solution:</span><br>Automate and monitor compliance management to meet industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Customer Relationship Management </span></h3> <span
                                    class="icon icon--24 icon--chevron"> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1" class="">
                                        <g id="system" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="iconography" transform="translate(-363.000000, -176.000000)" fill="#002437">
                                                <g id="Group-3" transform="translate(83.000000, 176.000000)">
                                                    <g id="ico/arrow-down" transform="translate(280.000000, 0.000000)">
                                                        <path
                                                            d="M11.66748,16.5975 C10.96748,16.5975 10.26748,16.3275 9.73748,15.7975 L3.2175,9.2775 C2.9275,8.9875 2.9275,8.5075 3.2175,8.2175 C3.5075,7.9275 3.9875,7.9275 4.2775,8.2175 L10.79748,14.7375 C11.27748,15.2175 12.05748,15.2175 12.53748,14.7375 L19.05748,8.2175 C19.34748,7.9275 19.82748,7.9275 20.11748,8.2175 C20.40748,8.5075 20.40748,8.9875 20.11748,9.2775 L13.59748,15.7975 C13.06748,16.3275 12.36748,16.5975 11.66748,16.5975 Z"
                                                            id="Path"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> </span>
                            </div>
                            <div class="accordion__item-content">
                            <div>
                            <p><span style="font-weight: bolder;">Challenge</span> <br><br>Balancing Orders and Production with SAP Business One: <br>
                            Managing customer orders, making products, and using resources efficiently.
</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution</span> <br>Use SAP Business One to easily keep track of orders, manage making products, and ensure resources are used well by taking advantage of its tools for organizing production and resources.
                            </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
`;
			break;
		default:
			contentDiv.innerHTML = "<p>No content available</p>";
	}

	setActiveTab(tabId);
	attachAccordionEventListeners();
}
document.addEventListener("load", function (e) {
	attachAccordionEventListeners();
});
function attachAccordionEventListeners() {
	document
		.querySelectorAll(".accordion__item-title")
		.forEach((titleElement) => {
			titleElement.removeEventListener("click", accordionToggle);
			titleElement.addEventListener("click", accordionToggle);
		});
}

function accordionToggle() {
	const contentElement = this.nextElementSibling;
	this.parentElement.classList.toggle("js--active");
	// contentElement.style.display =
	// 	contentElement.style.display === "block" ? "none" : "block";
}
function setActiveTab(tabId) {
	var buttons = document.querySelectorAll("#tabBar button");
	buttons.forEach(function (button) {
		// Only modify the DOM if necessary to prevent unnecessary reflows/repaints
		if (
			button.classList.contains("active") &&
			button.getAttribute("onclick") !== `loadContent('${tabId}')`
		) {
			button.classList.remove("active");
		} else if (
			!button.classList.contains("active") &&
			button.getAttribute("onclick") === `loadContent('${tabId}')`
		) {
			button.classList.add("active");
		}
	});
}
