export async function extractTextFromPDF(pdfFile: any) {
  const pdfJS = await import('pdfjs-dist/build/pdf' as any);
  pdfJS.GlobalWorkerOptions.workerSrc =
    window.location.origin + '/pdf.worker.min.mjs';

  const pdf = await pdfJS.getDocument(pdfFile).promise;

  let text = '';
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const textItems = textContent.items.map((item: any) => item.str).join(' ');
    text += textItems + ' ';
  }
  return text;
}

export function readFileAsArrayBuffer(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = () => reject(fileReader.error);
    fileReader.readAsArrayBuffer(file);
  });
}
