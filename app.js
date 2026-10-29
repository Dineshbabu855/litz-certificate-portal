(() => {
  const params = new URLSearchParams(window.location.search);
  const id = (params.get("id") || "").trim();
  const record = window.CERTIFICATE_RECORDS[id];
  const recordPanel = document.getElementById("record");
  const notFound = document.getElementById("not-found");

  if (!record) {
    notFound.hidden = false;
    return;
  }

  const put = (elementId, value) => {
    document.getElementById(elementId).textContent = value || "—";
  };
  put("student-name", record.name);
  put("institute", record.institute);
  put("company", record.company);
  put("field", record.field);
  put("start-date", record.startDate);
  put("end-date", record.endDate);
  put("certificate-id", record.certificateId || id);
  put("student-id", record.studentId);

  const avatar = document.getElementById("avatar");
  avatar.textContent = record.initials || (record.name || "?").split(/\s+/).slice(0, 2).map(s => s[0]).join("").toUpperCase();
  if (record.photo) {
    avatar.style.backgroundImage = `url("${record.photo}")`;
    avatar.textContent = "";
  }

  const website = document.getElementById("company-website");
  const email = document.getElementById("company-email");
  const phone = document.getElementById("company-phone");
  if (record.companyWebsite) {
    website.href = record.companyWebsite;
    website.textContent = record.companyWebsite.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  if (record.companyEmail) {
    email.href = `mailto:${record.companyEmail}`;
    email.textContent = record.companyEmail;
  }
  if (record.companyPhone) {
    phone.href = `tel:${record.companyPhone.replace(/[^\d+]/g, "")}`;
    phone.textContent = record.companyPhone;
  }
  document.title = `${record.name} | Certificate Details`;
  recordPanel.hidden = false;
})();
