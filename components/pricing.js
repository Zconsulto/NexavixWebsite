document.addEventListener("DOMContentLoaded", function () {
  var pricingTemplate = `
    <div class="pricing" id="pricing">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card card_red text-center">
              <div class="title">

                <h2>SAP ERP USER</h2>
              </div>
              <div class="price">
                <h4>$149<sup>95</sup><br><p style="font-size:15px;">/User/Month paid anually </p></h4>

              </div>
              <div class="option">
              <ul>
    <li><i class="fa fa-check" aria-hidden="true"></i> Checkout for Cash & Carry</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Invoice for Cash & Carry</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Scan & Print for Cash & Carry</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Back Office (A/P & A/R Invoicing)</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Back Office (SO and PO Creation)</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Robust Accounting and Finance</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Purchasing and Email Vendors</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Management</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Customer & Vendor Management</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Extensive Wholesale Reporting</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> MSA, OTP, CRV  Auto Reporting</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Online Check Printing</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Bank Statement Upload</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Alerts and Email Notifications</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> All Documents Print templates</li>
</ul>
              </div>
              <a href="../index.html#Contact">Order Now</a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card card_violet text-center">
              <div class="title">

                <h2>TRAINING</h2>
              </div>
              <div class="price">
              <h4>$2500<br><p style="font-size:15px;">One-Time Fee </p></h4>
              </div>
              <div class="option">
              <ul>
              <li><i class="fa fa-check" aria-hidden="true"></i> SAP For Cash & Carry</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> SAP For Back Office (AP/AR)</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Customer Management</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Vendor Management</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Product Management</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Management</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Count</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Receivable</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Pickup</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Inventory Transfer</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Purchase Orders</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Sales Order</li>

          </ul>
              </div>
              <a href="../index.html#Contact">Order Now</a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card card_three text-center">
              <div class="title">

                <h2>DATA UPLOAD</h2>
              </div>
              <div class="price">
              <h4>$1750<br><p style="font-size:15px;">/One-Time Fee </p></h4>
              </div>
              <div class="option">
              <ul>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Product Data</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Price List</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Customer Data</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Vendor Data</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Employee Data</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Chart of Accounts</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Banking Data</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Customer Opening Balances</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Vendor Opening Balances</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload GL Opening Balances</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Fixed Assets</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Upload Product Images</li>
          </ul>
              </div>
              <a href="../index.html#Contact">Order Now</a>
            </div>
          </div>
        </div>

    </div>
    </div>
    </div>
    `;
  var placeholders = document.querySelectorAll(".pricing-placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.outerHTML = pricingTemplate;
  });
});
//<i class="fa fa-paper-plane" aria-hidden="true"></i>
// <i class="fa fa-rocket" aria-hidden="true"></i>
// <i class="fa fa-plane" aria-hidden="true"></i>
