import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function handler(req, res) {
  // console.log("this is the requiste",req)
  if (req.method === 'POST') {
    try {
      const { htmlContent } = req.body;

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Set the HTML content in the Puppeteer page
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

      // Generate PDF from the HTML content
      const pdfBuffer = await page.pdf({

        format: 'A4',
        printBackground: true,
      });

      await browser.close();

      // Return the PDF as a response
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
      return res.end(pdfBuffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

async 

export async function POST(request){
  // console.log(request)
  return NextResponse.json({
    status: 200,
  })
}