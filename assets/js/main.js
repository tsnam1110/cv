// scripts.js

// document.getElementById('export-pdf').addEventListener('click', () => {
//     const element = document.body;
//     html2pdf().from(element).save('Tran-Son-Nam-CV.pdf');
// });

document.getElementById('export-pdf').addEventListener('click', () => {
        const element = document.body;
        const exportButton = document.getElementById('export-pdf');
        const originalBackgroundColor = document.body.style.backgroundColor;

    // Apply print styles programmatically
    document.body.style.backgroundColor = 'white';
    exportButton.style.display = 'none';

    const options = {
        margin: [10, 10, 10, 10], // margins in mm (top, right, bottom, left)
        filename: 'example.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // A4 format, portrait orientation
    };

    html2pdf().set(options).from(element).save('Tran-Son-Nam-CV.pdf').then(() => {
        // Revert back the styles after generating the PDF
        document.body.style.backgroundColor = originalBackgroundColor;
        exportButton.style.display = 'inline-block'; // or original display style
    });;
});
