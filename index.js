class diaExamen {
    constructor(fecha, hora){
        this.fecha = fecha;
        this.hora = hora;
        this.hemograma = {
            Hb: 0,
            Hto: 0,
            VCM: 0,
            CHCM: 0,
            Leucocitos: 0,
            Segmentados: 0,
            Linfocitos: 0,
            RAN: 0,
            Plaquetas: 0
        };
        this.gases = {
            arterial: false,
            pH: 0,
            pCO2: 0,
            pO2: 0,
            HCO3: 0,
            EB: 0,
            SatO2: 0
        };
        this.electrolitos = {
            Na: 0,
            K: 0,
            Cl: 0,
            Ca: 0,
            P: 0,
            Mg: 0
        };

        this.funcionHepatica = {
            GOT: 0,
            GPT: 0,
            FA: 0,
            BiliT: 0,
            BiliD: 0,
            Proteinas: 0,
            Albumina: 0
        };
        this.funcionRenal = {
            Urea: 0,
            BUN: 0,
            Crea: 0,
            AcUrico: 0
        };
        this.otros = {
            LDH: 0,
            PCR: 0
        }


    }

}
const nombresExamenes = ["HEMOGLOBINA", "HEMATOCRITO", "V.C.M", "C.H.C.M", "LEUCOCITOS", "PLAQUETAS", "RAN", "SEGMENTADOS", "LINFOCITOS", 
    "pH", "pCO2", 
];
let tablaConResultados = [];
let extractedText = "";

function extractTextFromPDF(pdfUrl) {
    // Asynchronously load the PDF file
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    
    loadingTask.promise.then(function (pdf) {
      // Initialize an array to hold the text from each page
      const textArray = [];
  
      // Iterate through each page of the PDF
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        pdf.getPage(pageNum).then(function (page) {
          // Extract text content from the page
          page.getTextContent().then(function (textContent) {
            const pageText = [];
  
            // Iterate through the text content items
            for (const item of textContent.items) {
              pageText.push(item.str);
            }
  
            // Join the text content from this page into a single string
            const pageTextString = pageText.join(" ");
  
            // Add the text from this page to the array
            textArray.push(pageTextString);
  
            // If this is the last page, display the extracted text
            if (pageNum === pdf.numPages) {
              const extractedText = textArray.join("\n");
              document.getElementById("pdfText").textContent = extractedText;
  
              // Now that you have extractedText, you can use it to find the index
              const index = extractedText.indexOf("Fecha/Hora Ingreso");
              console.log(extractedText);
              console.log(index);
              console.log(extractedText.substring(index-16, index -1));
              const labDia = new diaExamen(extractedText.substring(index-16, index -6), extractedText.substring(index-7, index-1));
              
              console.log(labDia);
                
  
              // Place your code here that depends on extractedText
            }
          });
        });
      }
    });
  }
  

// function extractTextFromPDF(pdfUrl) {
//     // Asynchronously load the PDF file
//     const loadingTask = pdfjsLib.getDocument(pdfUrl);
//     loadingTask.promise.then(function (pdf) {
//       // Initialize an array to hold the text from each page
//       const textArray = [];
  
//       // Iterate through each page of the PDF
//       for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//         pdf.getPage(pageNum).then(function (page) {
//           // Extract text content from the page
//           page.getTextContent().then(function (textContent) {
//             const pageText = [];
  
//             // Iterate through the text content items
//             for (const item of textContent.items) {
//               pageText.push(item.str);
//             }
//             // console.log(pageText)
  
//             // Join the text content from this page into a single string
//             const pageTextString = pageText.join(" ");
  
//             // Add the text from this page to the array
//             textArray.push(pageTextString);
  
//             // If this is the last page, display the extracted text
//             if (pageNum === pdf.numPages) {
//               extractedText = textArray.join("\n");
//               document.getElementById("pdfText").textContent = extractedText;
//               console.log(extractedText.indexOf("Fecha/Hora Ingreso"));

//             }
//           });
//         });
//       }
//     })
//       .then(() => {
//           // find Fecha/Hora Ingreso and extract the date and time
//           console.log(extractedText);
//           console.log(extractedText.indexOf("Fecha/Hora Ingreso"));
//         });
// }
  





// const myButton = document.getElementById('#boton');
// myButton.addEventListener('click', function() {
//     const leerPdf = (path) => {
//         function leerPdf(path) {
//             const reader = new FileReader();
//             reader.onload = () => console.log(reader.result);
//             reader.readAsText(blob);
//             return new Promise((resolve, reject) => {
//                     const pdfParser = new PDFParser();
//                     pdfParser.loadPDF(path);
//                     pdfParser.on('pdfParser_dataError', reject);
//                     pdfParser.on('pdfParser_dataReady', () => {
//                         console.log("estamos intentando, linea 13")
//                         const text = pdfParser.getRawTextContent();
//                         resolve(text);
//                         console.log(text)
//                     });
//             });
//         };
    
//     }
// }
// );

// function leerCsv(file){
//     console.log(file);
    
//     fetch(file)
//     .then((response) =>{
//         response.text();

//     } )
//     .then(rep => {
//       let data = JSON.parse(rep);
//     })
//     .catch(error => console.log(error))
 
// }

// let SHEET_ID = '1SMU1ltLrMVifOb2T8sN5gu5Yd3tKmQ6eid6QnjSDlQo';
// let SHEET_TITLE = 'dosis';
// let SHEET_RANGE = 'A1:E2'
// let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
// console.log('hola');
// fetch(FULL_URL)
// .then(res => res.text())
// .then(rep => {
//     let data = JSON.parse(rep.substr(47).slice(0,-2));
//     let tablitaLinda = data.table.rows; 
//     console.log(tablitaLinda);
//     for (let i = 0; i < tablitaLinda[0].c.length; i++) {
//         const element = tablitaLinda[0].c[i].v;
//         console.log(element);
//         console.log('hola mundo desde el for');
//         document.getElementById('Headings').innerHTML += `<th>${element}</th>` 
//     }
//     for (let i = 1; i < tablitaLinda.length; i++) {
//         const element = tablitaLinda[i].c;
//         const fila = `<tr id="fila_${i}"></tr>`;
//         document.getElementById('cuerpo_tabla').innerHTML += fila;
//         for (let j = 0; j < element.length; j++) {
//             if (element[j] == null) {
//                 document.getElementById(`fila_${i}`).innerHTML += 'NA';
//             }else{
//                 if (element[j].v == null) {
//                     document.getElementById(`fila_${i}`).innerHTML += 'NA';
//                 } else{
//                     const dato = element[j].v;
//                     const celda = `<td>${dato}</td>`;
//                     document.getElementById(`fila_${i}`).innerHTML += celda;
//                 }

//             }
            
//         }

        
//     }
// });