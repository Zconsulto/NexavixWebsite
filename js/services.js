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
      contentDiv.innerHTML = `<div class="highlight-section" id="ERP-Consultation">
            <div class="container col-xxl-9"><h1 style="color: #024172;">ERP Consultation</h1></div>
        </div>
            <div class="container col-xxl-9 ">
                <div class="row flex-lg-row-reverse">
                    <div class="col-9 col-sm-8 col-lg-4">
                        <img src="../images/ERPConsultation.jpg" class="d-block mx-lg-auto img-fluid lead" alt="Bootstrap Themes" width="690" height="500" loading="lazy">
                    </div>
                    <div class="col-lg-8">
                        <p class="lead">
                        During our ERP consultation, we assess which software, including SAP Business One, best supports your unique processes and industry requirements.
                        </p>
                    </div>
                </div>
            </div>`;
      break;
    case "tab2":
      contentDiv.innerHTML = `<div class="highlight-section" id="Implementation">
            <div class="container col-xxl-9">
            <h1 style="color: #024172;">Implementation</h1>
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
                        SAP Business One implementation is a meticulously planned process, led by our experienced ZConsulto team. We begin by
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
            <h1 style="color: #024172;">Support</h1>
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
                    Beyond just implementation, we offer daily support for SAP B1, ensuring minimal disruptions and maximizing system uptime for your business's growth and success.
                    </p>
                </div>
            </div>
        </div>
        `;
      break;
    case "tab4":
      contentDiv.innerHTML = `<div class="highlight-section" id="Integration">
            <div class="container col-xxl-9">
            <h1 style="color: #024172;">Integration</h1>
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
                        ZConsulto's expertise in seamless SAP Business One integration ensures smooth processes, consistent data, and a
                        comprehensive operational view, whether it's third-party apps, e-commerce, or supply chain.
                    </p>
                </div>
            </div>
        </div>`;
      break;
    case "tab5":
      contentDiv.innerHTML = `<div class="highlight-section" id="Cloud-Hosting">
            <div class="container col-xxl-9">
            <h1 style="color: #024172;">Cloud Hosting</h1>
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
                    Experience flexible, secure cloud hosting with ZConsulto for SAP Business One. Access your resources anytime, anywhere, while we handle the complexities of IT infrastructure, enabling enhanced efficiency and agility for your business.
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
