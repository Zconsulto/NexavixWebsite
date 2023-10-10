document.addEventListener("DOMContentLoaded", function () {
	// Extracting the 'tab' parameter from the URL
	const urlParams = new URLSearchParams(window.location.search);
	const tab = urlParams.get("tab");

	// Check if tab parameter is available
	if (tab) {
		loadContent(tab);
	}
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
                                    <p>Challenge <br><br>Inefficient Inventory Management: <br> Inconsistent stock levels and inaccurate data hinder streamlined production.</p>
                                    <p>&nbsp;</p>
                                    <p>Solution: <br>
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
                                    <p>Challenge <br><br>Complex Supply Chain Management: <br>Managing multiple suppliers, logistics, and quality control is
                                        challenging.</p>
                                        <p>&nbsp;</p>
                                    <p>Solution: <br>Consolidate supplier data, manage contracts, and optimize procurement processes.
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
                                    <p>Challenge <br><br>Data Management and Utilization: <br> Fragmented data and lack of real-time insights to inform decision-making.</p>
                                    <p>&nbsp;</p>
                                    <p>Solution: <br>Leverage real-time data and analytics to drive informed business decisions.</p>
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
                                    <p>Challenge <br><br>Regulatory Compliance and Quality Assurance: <br>
                                    Ensuring products meet stringent regulatory standards and consistent quality.
</p>
                                        <p>&nbsp;</p>
                                    <p>Solution: <br>Automate and monitor compliance management to meet industry standards.
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
                                    <p>Integrated Customer Management: <br>
                                    Manage customer data, sales pipeline, and customer service seamlessly.
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
                                    <p>Optimize production schedules by Balancing demand, production capacity, and resource utilization efficiently.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
			break;
		case "tab2":
			contentDiv.innerHTML = `<div class="highlight-section" id="Implementation">
            <div class="container col-xxl-9">
                <h1>Implementation</h1>
            </div>
        </div>
        <div class="container col-xxl-9 ">
            <div class="row">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/implementation.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="550" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        SAP Business One implementation is a meticulously planned process, led by our experienced Nexavix team. We begin by
                        comprehensively understanding your unique business needs and objectives to tailor the implementation seamlessly
                        <ul class="lead">
                            <li>Analysis: Understanding your needs by diagnosing and analyzing your information.</li>
                            <li>Configuration: Personalizing SAP Business One to align with your processes.</li>
                            <li>Migration: Transfer your data to SAP, ensuring a smooth transition.</li>
                            <li>Training: Enrich your staff with the skills to operate the system effectively.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>`;
			break;
		case "tab3":
			contentDiv.innerHTML = `<div class="highlight-section" id="Support">
            <div class="container col-xxl-9">
                <h1>Support</h1>
            </div>
        </div>
        <div class="container col-xxl-9">
            <div class="row flex-lg-row-reverse">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/support.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="500" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        Beyond implementation, we offer exceptional daily support, minimizing disruptions. Focus on your core business while we
                        maximize system uptime for your growth and success
                    </p>
                </div>
            </div>
        </div>
        `;
			break;
		case "tab4":
			contentDiv.innerHTML = `<div class="highlight-section" id="Integration">
            <div class="container col-xxl-9">
                <h1>Integration</h1>
            </div>
        </div>
        <div class="container col-xxl-9 ">
            <div class="row">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/integration.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="500" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        Nexavix's expertise in seamless SAP Business One integration ensures smooth processes, consistent data, and a
                        comprehensive operational view, whether it's third-party apps, e-commerce, or supply chain.
                    </p>
                </div>
            </div>
        </div>`;
			break;
		case "tab5":
			contentDiv.innerHTML = `<div class="highlight-section" id="Cloud-Hosting">
            <div class="container col-xxl-9">
                <h1>Cloud Hosting</h1>
            </div>
        </div>
        <div class="container col-xxl-9 ">
            <div class="row flex-lg-row-reverse">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/cloudHosting.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="500" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        Experience flexible, secure cloud hosting with Nexavix. Access your resources anytime, anywhere while we handle IT
                        infrastructure complexities, enabling your business to thrive with enhanced efficiency and agility.
                    </p>
                </div>
            </div>
        </div>`;
			break;
		case "tab6":
			contentDiv.innerHTML = `<div class="highlight-section" id="Cloud-Hosting">
            <div class="container col-xxl-9">
                <h1>Cloud Hosting</h1>
            </div>
        </div>
        <div class="container col-xxl-9 ">
            <div class="row flex-lg-row-reverse">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/cloudHosting.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="500" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        Experience flexible, secure cloud hosting with Nexavix. Access your resources anytime, anywhere while we handle IT
                        infrastructure complexities, enabling your business to thrive with enhanced efficiency and agility.
                    </p>
                </div>
            </div>
        </div>`;
			break;
		case "tab7":
			contentDiv.innerHTML = `<div class="highlight-section" id="Cloud-Hosting">
            <div class="container col-xxl-9">
                <h1>Cloud Hosting</h1>
            </div>
        </div>
        <div class="container col-xxl-9 ">
            <div class="row flex-lg-row-reverse">
                <div class="col-9 col-sm-8 col-lg-4">
                    <img src="../images/cloudHosting.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes"
                        width="690" height="500" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <p class="lead">
                        Experience flexible, secure cloud hosting with Nexavix. Access your resources anytime, anywhere while we handle IT
                        infrastructure complexities, enabling your business to thrive with enhanced efficiency and agility.
                    </p>
                </div>
            </div>
        </div>`;
			break;
		default:
			contentDiv.innerHTML = "<p>No content available</p>";
	}

	setActiveTab(tabId);
}
document.addEventListener("DOMContentLoaded", function () {
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
document.querySelectorAll('.accordion__item-title').forEach(title => {
    title.addEventListener('click', function() {

        // Close all other accordion items
        document.querySelectorAll('.accordion__item-content').forEach(content => {
            content.style.maxHeight = null;
        });
        
        // Open the clicked accordion item if it was previously closed
        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            // accordion is currently open, so close it
            content.style.maxHeight = null; 
        }else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
