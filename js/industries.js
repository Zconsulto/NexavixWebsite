function loadContent(tabId) {
	var contentDiv = document.getElementById("content");

	switch (tabId) {
		case "tab1":
			contentDiv.innerHTML = `<div class="highlight-section" id="ERP-Consultation">
            <div class="container col-xxl-9"><h1>ERP Consultation</h1></div>
        </div>
            <div class="container col-xxl-9 ">
                <div class="row flex-lg-row-reverse">
                    <div class="col-9 col-sm-8 col-lg-4">
                        <img src="../images/ERPConsultation.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes" width="690" height="500" loading="lazy">
                    </div>
                    <div class="col-lg-8">
                        <p class="lead">
                            Choosing software can be intricate and time-consuming for businesses.
                            So, our ERP consultation lets determine which
                            software can support your processes and your industry requirements.
                        </p>
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

function setActiveTab(tabId) {
    var buttons = document.querySelectorAll('#tabBar button');
    buttons.forEach(function(button) {
        // Only modify the DOM if necessary to prevent unnecessary reflows/repaints
        if (button.classList.contains('active') && button.getAttribute('onclick') !== `loadContent('${tabId}')`) {
            button.classList.remove('active');
        } else if (!button.classList.contains('active') && button.getAttribute('onclick') === `loadContent('${tabId}')`) {
            button.classList.add('active');
        }
    });
}
