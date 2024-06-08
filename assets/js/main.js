// scripts.js

document.getElementById('export-pdf').addEventListener('click', () => {
    const element = document.body;
    html2pdf().from(element).save('Tran-Son-Nam-CV.pdf');
});
