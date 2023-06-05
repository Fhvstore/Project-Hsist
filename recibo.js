function recibo_Show(){

 
// Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)

// Embed the PDF into the HTML page and show it to the user
pdffile.href =  'data:application/pdf;base64,' + b64;
pdffile.download = "recibo.pdf"

    configAppBarBasics("Exibição do Recibo", "showBackButton");

    trocaTela('recibo')

}S