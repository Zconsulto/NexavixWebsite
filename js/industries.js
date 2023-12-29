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
            <div class="image-caption"><br>Optimized Manufacturing with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">

                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Unlock efficient production and operational transparency with SAP Business One.</span><br> Guiding your manufacturing towards
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
                                    <p><span style="font-weight: bolder;">Solution</span><br><br>
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
                                    <p><span style="font-weight: bolder;">Solution</span><br><br>Consolidate supplier data, manage contracts, and optimize procurement processes.
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
                                    <p><span style="font-weight: bolder;">Solution</span><br><br>Leverage real-time data and analytics to drive informed business decisions.</p>
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
                                    <p><span style="font-weight: bolder;">Solution</span><br><br>Automate and monitor compliance management to meet industry standards.
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
                                <p><span style="font-weight: bolder;">Solution</span><br><br>Use SAP Business One's CRM to keep all customer info in one place, track sales easily, and handle customer service neatly and promptly, ensuring smooth interactions from sale to support.
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
                                <p><span style="font-weight: bolder;">Solution</span> <br><br>Use SAP Business One to easily keep track of orders, manage making products, and ensure resources are used well by taking advantage of its tools for organizing production and resources.
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
            <div class="image-caption" style="left: 36% !important;"> <br>Streamlined Wholesale Distribution with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Elevate your wholesale operations to new heights.</span><br> SAP Business One empowers distributors with real-time insights, efficient inventory control, and seamless supply chain management, ensuring sustainable growth.</h2>
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
            <div class="image-caption" > <br>Elevating Retail Success with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Synchronizing Inventory, Sales, and Customer Experiences</span><br> in a Dynamic Retail Environment with SAP B1.</h2>
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
            <img src="../images/ind4.jpeg" alt="Chemistry Industries Background">
            <div class="image-caption" style="left: 36% !important;"> <br>Navigating the Chemical Industry's Complexities with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Enhancing Production Safety, Quality, and Compliance</span><br> In a Dynamic Market with SAP Business One</h2>
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
            <img src="../images/ind5.jpg" alt="Oil & Gas Industries Background">
            <div class="image-caption" style="left: 36% !important;"><br>Propelling the Oil & Gas Industry Forward with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Harmonizing Operations and Management for Sustained Growth and Efficiency</span><br>With SAP Business One.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Unified Compliance Management </span></h3> <span
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory Compliance: <br>  Adhering to stringent, varied global energy regulations and standards.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>
                            - Integrated regulatory monitoring and reporting tools.
                            <br><br>
                            - Ensures unified and streamlined compliance across all operations.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Streamlined Supply Chain Operations </span></h3>
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Supply Chain Complexity: <br>Navigating and optimizing extensive and intricate supply chains amidst volatile market conditions.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Comprehensive and intelligent supply chain management.
                            <br><br>
                            - Enhances visibility and control throughout the entire supply chain.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Safety and Environmental Oversight </span></h3>
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br> Safety and Environmental Management: <br>Upholding the highest safety standards for processes, personnel, and environmental aspects.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br> <br>- Advanced safety and environmental monitoring and management tools.
                            <br><br>
                            - Ensures consistent adherence to safety protocols and environmental standards.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Enhanced Project Management </span></h3> <span
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Project Management: <br>
                            Coordinating and managing large-scale projects with numerous stakeholders and resources.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>- Robust project management tools for diverse operations.
                                <br><br>
                                - Facilitates efficient management of large-scale projects and resources.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Optimized Cost Management </span></h3> <span
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
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Cost Control with SAP Business One: <br>
                    Efficiently managing the diverse costs associated with exploration, extraction, and production.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br><br>- Real-time financial insights and cost management capabilities.
                    <br>
                    - Enables precise control and strategic allocation of resources and finances.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                        <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Advanced Data Utilization </span></h3> <span
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
                        <p><span style="font-weight: bolder;">Challenge</span> <br><br>Data Management and Analysis: <br>
                        Leveraging voluminous data for insightful, real-time decision-making.
    </p>
                            <p>&nbsp;</p>
                        <p><span style="font-weight: bolder;">Solution</span> <br><br>Use SAP Business One's real-time analytics to quickly turn large amounts of data into actionable insights for informed decision-making.
                        </p>
                    </div>
                </div>
            </div>
        </div>
`;
			break;
		case "tab6":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind6.jpeg" alt="Automotive Industries Background">
            <div class="image-caption" style="left: 36% !important;"><br>Accelerating Success in the Automotive Industry with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Driving Operational Excellence through Intelligent Automation and Integrated Management</span><br> with SAP Business One</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Integrated Compliance Management </span></h3> <span
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Regulatory and Compliance Management: <br> Ensuring adherence to automotive industry standards and global regulations.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>
                            -  Cohesive monitoring and reporting of regulatory adherence.
                            <br><br>
                            -  Streamline compliance processes and ensure consistently up-to-standard
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Streamlined Supply Chain Operations </span></h3>
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Complex Supply Chain Dynamics: <br>Controlling and optimizing extensive, global supply chains, ensuring timeliness and cost-efficiency.</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br> - Comprehensive supply chain and vendor management.
                            <br><br>
                            -  Enhance visibility, control, and optimization throughout supply chains.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Advanced Quality Controls </span></h3>
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Quality Assurance: <br> Maintaining rigorous quality controls across production and delivery processes.</p>
                            <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution:</span><br><br>- Detailed quality checks and reporting.
                            <br><br>
                            - Maintain and elevate product quality through data-driven insights.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Unified Customer Management </span></h3> <span
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
                            <p><span style="font-weight: bolder;">Challenge</span><br><br>Customer Service and Satisfaction: <br>
                            Offering exceptional customer support, both pre and post-sale, to enhance client retention and satisfaction.
</p>
                                <p>&nbsp;</p>
                                <p><span style="font-weight: bolder;">Solution:</span><br><br>- CRM and after-sales support management.
                                <br><br>
                                - Foster customer loyalty with effective relationship and support management.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion__item ">
                    <div class="accordion__item-title" data-accordion-button="">
                        <h3><span class="accordion__item-title"> Support for Innovation </span></h3> <span
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
                    <p><span style="font-weight: bolder;">Challenge</span> <br><br>Innovative Demands and Competition: <br>
                    Keeping pace with technological advancements and evolving customer preferences in a competitive market.
</p>
                        <p>&nbsp;</p>
                    <p><span style="font-weight: bolder;">Solution</span> <br><br>R&D and project management functionalities.
                    <br><br>
                    -  Facilitate innovation with efficient project execution and data utilization.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                        <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Efficient Resource Utilization </span></h3> <span
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
                        <p><span style="font-weight: bolder;">Challenge</span> <br><br>Resource Management: <br>
                        Efficiently managing labor, materials, and financial resources across varied manufacturing projects.
    </p>
                            <p>&nbsp;</p>
                        <p><span style="font-weight: bolder;">Solution</span> <br><br>- Resource planning and management tools.
                        <br><br>
                        - Optimize the use of materials, labor, and finances across all projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
`;
			break;
		case "tab7":
			contentDiv.innerHTML = `<div class="image-banner">
            <img src="../images/ind7.jpeg" alt="Wholesale Industries Background">
            <div class="image-caption" style="left: 36% !important;"><br>Revolutionizing the Food & Beverage Sector with<br> <strong>SAP Business one</strong></div>
        </div>
        <div id="faq" class="faq-accordion" data-controller="blocks/faq-accordion">
            <div class="faq-accordion__container">
                <div class="faq-accordion__content" data-aos="fade-right">
                    <h2 class="faq-accordion__title h3"><br> <span style="color: #024172;">Streamlining Operations & Ensuring Product Quality from Farm to Table</span><br>with SAP Business One.</h2>
                </div>
                <div class="faq-accordion__accordion" data-aos="fade-left">
                    <div class="accordion" data-accordion="">
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Ensured Compliance </span></h3> <span
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
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Compliance and Safety: <br> Adhering to strict regulatory and safety standards and ensuring product traceability.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br><bR>
                                    - Efficiently manage and document all compliance and safety-related data.
                                    <br><br>
                                    -Use traceability features to manage recalls and prevent issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Streamlined Supply Chain </span></h3>
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
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Supply Chain Complexities: <br>Navigating a multifaceted supply chain, ensuring freshness, and minimizing waste</p>
                                        <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br><br>- Enhance visibility across the entire supply chain.
                                    <br><br>
                                    - Utilize data to optimize procurement and logistics, minimizing waste.
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
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Demand Forecasting: <br> Predicting demand accurately to optimize inventory and adapt to seasonal shifts.</p>
                                    <p>&nbsp;</p>
                                    <p><span style="font-weight: bolder;">Solution:</span><br><br>- Employ intelligent analytics to anticipate demand and adjust inventory accordingly.
                                    <br><br>
                                    - Leverage insights to plan for seasonal demands and market trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Efficient Production Planning </span></h3> <span
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
                                    <p><span style="font-weight: bolder;">Challenge</span><br><br>Production Planning: <br>
                                    Efficiently scheduling production and managing resource allocation.
</p>
                                        <p>&nbsp;</p>
                                        <p><span style="font-weight: bolder;">Solution:</span><br><br>- Use resource planning tools to optimize production schedules.
                                        <br><br>
                                        - Ensure efficient resource allocation and reduce downtime.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                            <div class="accordion__item-title" data-accordion-button="">
                                <h3><span class="accordion__item-title"> Maintained Quality </span></h3> <span
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
                            <p><span style="font-weight: bolder;">Challenge</span> <br><br>Quality Consistency with SAP Business One: <br>
                            Ensuring consistent product quality and appropriate storage/transport conditions.
</p>
                                <p>&nbsp;</p>
                            <p><span style="font-weight: bolder;">Solution</span> <br><br>- Utilize batch and lot tracking to ensure quality and facilitate recalls.
                            <br><br>
                            - Ensure proper storage and handling conditions through accurate data tracking.
                            </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion__item ">
                        <div class="accordion__item-title" data-accordion-button="">
                            <h3><span class="accordion__item-title"> Enhanced Customer and Supplier Relations </span></h3> <span
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
                        <p><span style="font-weight: bolder;">Challenge</span> <br><br>Relationship Management: <br>
                        Satisfying dynamic customer expectations and maintaining supplier reliability.
</p>
                            <p>&nbsp;</p>
                        <p><span style="font-weight: bolder;">Solution</span> <br><br>- Manage customer data, orders, and feedback efficiently.
                        <br><br>
                        - Facilitate better communication and order management with suppliers.

                        </p>
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
