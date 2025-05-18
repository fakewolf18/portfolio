document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

function retrieveCertificatePDF() {
    var selectedCertificate = document.getElementById('certificateSelect').value;

    if (selectedCertificate) {
        var pdfUrl = '';

        // Assign PDF URL based on selected certificate
        switch (selectedCertificate) {
            case 'oracle':
                pdfUrl = 'C:/Users/Harshavardhan/Documents/College/portfolio/certificates/dbmssql.pdf';  // Replace with actual path to your PDF
                break;
            case 'aws':
                pdfUrl = 'C:/Users/Harshavardhan/Documents/College/portfolio/certificates/awsict.pdf';  // Replace with actual path to your PDF
                break;
            case 'cisco':
                pdfUrl = 'C:/Users/Harshavardhan/Documents/College/portfolio/certificates/linkedinlearning.pdf';  // Replace with actual path to your PDF
                break;
            case 'lan':
                pdfUrl = 'C:/Users/Harshavardhan/Documents/College/portfolio/certificates/netlans.pdf';  // Replace with actual path to your PDF
                break;
            default:
                alert("No certificate selected.");
                return;
        }

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
    } else {
        alert("Please select a certificate.");
    }
}
