
function closeWarning() {
    const warningBox = document.getElementById('warning-box');
    if (warningBox) {
        warningBox.classList.add('hidden');
        setTimeout(() => {
            warningBox.style.display = 'none';
        }, 500);
    }
}


function retrieveCertificatePDF() {
    var selectedCertificate = document.getElementById('certificateSelect').value;

    if (selectedCertificate) {
        var pdfUrl = '';

        switch (selectedCertificate) {
            case 'oracle':
                pdfUrl = 'cert/dbmssql.pdf';
                break;
            case 'aws':
                pdfUrl = 'cert/awsict.pdf'; 
                break;
            case 'cisco':
                pdfUrl = 'cert/linkedinlearning.pdf';
                break;
            case 'lan':
                pdfUrl = 'cert/netlans.pdf';
                break;
            default:
                alert("No certificate selected.");
                return;
        }


        window.open(pdfUrl, '_blank');
    } else {
        alert("Please select a certificate.");
    }
}

