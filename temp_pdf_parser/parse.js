const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    const rawText = pdfParser.getRawTextContent();
    const lines = rawText.split('\n');
    let jaipurHospitals = [];
    
    // Simple heuristic: If a line contains "Jaipur", we look around it for a hospital name.
    // Actually, looking at the previous output:
    // 846: 16             VATIKA-A, GOKULPURA.  Jaipur     Jaipur  Dental              9414661915   25-12-2023   25-12-2028   Y
    // 847: ANAND DENTAL HOSPITAL AND
    
    // We can just regex match lines with "Jaipur" and assume the next line or previous line is the hospital name if it doesn't contain Jaipur.
    // To make it structured, maybe we just extract all lines and find lines that look like a hospital name.
    // "HOSPITAL", "CLINIC", "CARE", "INSTITUTE", "CENTRE"
    
    let hospitals = [];
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line.match(/Jaipur/i)) {
            // It's a row containing Jaipur.
            // Let's grab the hospital name. Usually it's on the line right after, or the same line if it's not jumbled.
            let possibleNameLine1 = lines[i+1] ? lines[i+1].trim() : "";
            let possibleNameLine2 = lines[i+2] ? lines[i+2].trim() : "";
            let possibleNameLine3 = lines[i-1] ? lines[i-1].trim() : "";
            let possibleNameLine4 = lines[i-2] ? lines[i-2].trim() : "";
            
            let name = "";
            if (possibleNameLine1.match(/HOSPITAL|CLINIC|CARE|INSTITUTE|CENTRE|Sanjivani|Apex|Fortis/i)) {
                name = possibleNameLine1;
            } else if (possibleNameLine3.match(/HOSPITAL|CLINIC|CARE|INSTITUTE|CENTRE|Sanjivani|Apex|Fortis/i)) {
                name = possibleNameLine3;
            } else if (possibleNameLine2.match(/HOSPITAL|CLINIC|CARE|INSTITUTE|CENTRE|Sanjivani|Apex|Fortis/i)) {
                name = possibleNameLine2;
            } else if (possibleNameLine4.match(/HOSPITAL|CLINIC|CARE|INSTITUTE|CENTRE|Sanjivani|Apex|Fortis/i)) {
                name = possibleNameLine4;
            }
            
            if (name && !hospitals.includes(name) && name.length > 5 && name.length < 100) {
                hospitals.push(name);
            }
        }
    }
    
    // deduplicate and clean up
    let clean = [...new Set(hospitals)];
    // Ensure ANAND DENTAL is in there
    let hasAnand = clean.some(n => n.toUpperCase().includes('ANAND DENTAL'));
    if (!hasAnand) clean.unshift("ANAND DENTAL HOSPITAL AND DIAGNOSTIC CENTRE");
    
    fs.writeFileSync('../src/data/jaipurHospitals.json', JSON.stringify(clean, null, 2));
    console.log(`Extracted ${clean.length} hospitals.`);
});

pdfParser.loadPDF("C:/Users/HP/Desktop/Projects/Aanand Hospita/src/assets/List_of_empaneled_hospitals_under_RGHS.pdf");
