import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Invoice, CompanyInfo } from '@/types';

export interface ReceiptData {
  id: string;
  amount: number;
  currency: string;
  method: string;
  status: string;
  user: {
    name: string;
    email?: string;
    accountType?: string;
  };
  company: {
    name: string;
    address: string;
    email: string;
  };
  date: string;
  items: Array<{
    description: string;
    amount: number;
  }>;
}

export interface ReportOptions {
  type: 'sales' | 'inventory' | 'revenue' | 'custom';
  dateRange?: {
    from: string;
    to: string;
  };
  currency?: string;
  watermark?: string;
}

export interface ChartData {
  type: 'line' | 'bar';
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}

export class PDFGenerationError extends Error {
  constructor(
    message: string,
    public code: string = 'PDF_GENERATION_ERROR',
    public details?: any
  ) {
    super(message);
    this.name = 'PDFGenerationError';
  }
}

export const pdfService = {
  /**
   * Draw a chart in the PDF document
   * @private
   */
  drawChart(doc: jsPDF, chart: ChartData, startY: number): number {
    const pageWidth = doc.internal.pageSize.width;
    const chartWidth = pageWidth - 28; // 14mm margin on each side
    const chartHeight = 60; // Height in mm

    try {
      // Add chart title
      doc.setFontSize(12);
      doc.setTextColor(66, 139, 202);
      doc.text(chart.datasets[0].label, 14, startY);
      startY += 5;

      if (chart.type === 'line') {
        // Draw axes
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.1);
        doc.line(14, startY + chartHeight, 14 + chartWidth, startY + chartHeight); // X axis
        doc.line(14, startY, 14, startY + chartHeight); // Y axis

        // Draw data
        const maxValue = Math.max(...chart.datasets[0].data);
        const xStep = chartWidth / (chart.labels.length - 1);
        const yScale = chartHeight / maxValue;

        chart.datasets.forEach(dataset => {
          doc.setDrawColor(dataset.color || '#3B82F6');
          doc.setLineWidth(0.3);

          // Draw lines
          for (let i = 0; i < dataset.data.length - 1; i++) {
            const x1 = 14 + (i * xStep);
            const y1 = startY + chartHeight - (dataset.data[i] * yScale);
            const x2 = 14 + ((i + 1) * xStep);
            const y2 = startY + chartHeight - (dataset.data[i + 1] * yScale);
            doc.line(x1, y1, x2, y2);
          }
        });

        // Add labels
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        chart.labels.forEach((label, i) => {
          const x = 14 + (i * xStep);
          doc.text(label, x, startY + chartHeight + 5, { align: 'center' });
        });
      } else if (chart.type === 'bar') {
        // Draw axes
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.1);
        doc.line(14, startY + chartHeight, 14 + chartWidth, startY + chartHeight); // X axis
        doc.line(14, startY, 14, startY + chartHeight); // Y axis

        // Calculate bar dimensions
        const maxValue = Math.max(...chart.datasets[0].data);
        const barCount = chart.labels.length;
        const barWidth = (chartWidth / barCount) * 0.8; // 80% of available space
        const barSpacing = (chartWidth / barCount) * 0.2; // 20% for spacing
        const yScale = chartHeight / maxValue;

        // Draw bars
        chart.datasets.forEach((dataset, datasetIndex) => {
          doc.setFillColor(dataset.color || '#3B82F6');

          dataset.data.forEach((value, index) => {
            const barHeight = value * yScale;
            const x = 14 + (index * (barWidth + barSpacing));
            const y = startY + chartHeight - barHeight;
            
            // Draw bar
            doc.rect(x, y, barWidth, barHeight, 'F');
            
            // Add value on top of bar
            doc.setFontSize(8);
            doc.setTextColor(50, 50, 50);
            doc.text(
              value.toString(),
              x + (barWidth / 2),
              y - 2,
              { align: 'center' }
            );
          });
        });

        // Add labels
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        chart.labels.forEach((label, i) => {
          const x = 14 + (i * (barWidth + barSpacing)) + (barWidth / 2);
          doc.text(
            label,
            x,
            startY + chartHeight + 5,
            { align: 'center' }
          );
        });
      }

      return startY + chartHeight + 20;
    } catch (error) {
      throw new PDFGenerationError(
        'Failed to draw chart',
        'CHART_GENERATION_ERROR',
        error
      );
    }
  },
  /**
   * Generate a receipt PDF
   */
  async generateReceipt(data: ReceiptData): Promise<Uint8Array> {
    let doc: jsPDF;
    
    try {
      doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
    } catch (error) {
      throw new PDFGenerationError(
        'Failed to initialize PDF document',
        'PDF_INIT_ERROR',
        error
      );
    }

    try {
      const pageWidth = doc.internal.pageSize.width;
      
      // Add header
      doc.setFontSize(20);
      doc.text(data.company.name, pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.text(data.company.address, pageWidth / 2, 30, { align: 'center' });
      doc.text(data.company.email, pageWidth / 2, 40, { align: 'center' });
      
      // Add receipt details
      doc.setFontSize(14);
      doc.text('RECEIPT', pageWidth / 2, 60, { align: 'center' });
      
      doc.setFontSize(10);
      const startY = 80;
      const leftMargin = 20;
      const rightMargin = pageWidth - 20;
      
      // Receipt info
      doc.text(`Receipt No: ${data.id}`, leftMargin, startY);
      doc.text(
        `Date: ${new Date(data.date).toLocaleDateString()}`,
        rightMargin,
        startY,
        { align: 'right' }
      );
      
      // Customer info
      doc.text(`Customer: ${data.user.name}`, leftMargin, startY + 10);
      if (data.user.email) {
        doc.text(`Email: ${data.user.email}`, leftMargin, startY + 20);
      }
      if (data.user.accountType) {
        doc.text(`Account Type: ${data.user.accountType}`, leftMargin, startY + 30);
      }
      
      // Items table
      try {
        (doc as any).autoTable({
          startY: startY + 50,
          head: [['Description', 'Amount']],
          body: data.items.map(item => [
            item.description,
            `${data.currency === 'NGN' ? '₦' : '$'}${item.amount.toLocaleString()}`
          ]),
          styles: { fontSize: 10 },
          headStyles: { fillColor: [66, 139, 202] },
          margin: { left: leftMargin, right: 20 }
        });
      } catch (error) {
        throw new PDFGenerationError(
          'Failed to generate items table',
          'PDF_TABLE_ERROR',
          error
        );
      }

      const finalY = (doc as any).lastAutoTable.finalY;
      
      // Add total
      doc.text(
        `Total Amount: ${data.currency === 'NGN' ? '₦' : '$'}${data.amount.toLocaleString()}`,
        rightMargin,
        finalY + 10,
        { align: 'right' }
      );
      
      // Add payment info
      doc.text(`Payment Method: ${data.method}`, leftMargin, finalY + 20);
      doc.text(`Status: ${data.status}`, leftMargin, finalY + 30);
      
      // Add footer
      doc.setFontSize(8);
      doc.text(
        'This is a computer-generated document. No signature is required.',
        pageWidth / 2,
        doc.internal.pageSize.height - 20,
        { align: 'center' }
      );

      return doc.output('arraybuffer');
    } catch (error) {
      if (error instanceof PDFGenerationError) {
        throw error;
      }
      throw new PDFGenerationError(
        'Failed to generate receipt PDF',
        'PDF_GENERATION_ERROR',
        error
      );
    }
  },

  /**
   * Generate a business report PDF
   */
  async generateReport(data: any, options: ReportOptions): Promise<Uint8Array> {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    let pageCount = 1;
    
    const addPageNumber = (pageNum: number, totalPages: number) => {
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Page ${pageNum} of ${totalPages}`,
        pageWidth - 20,
        pageHeight - 10,
        { align: 'right' }
      );
    };

    const checkAndAddNewPage = (neededSpace: number, currentY: number) => {
      if (currentY + neededSpace > pageHeight - 20) {
        doc.addPage();
        pageCount++;
        return 20; // Reset Y position to top of new page
      }
      return currentY;
    };
    
    try {
      // Add header
      doc.setFontSize(24);
      doc.setTextColor(66, 139, 202);
      doc.text(`${options.type.toUpperCase()} REPORT`, pageWidth / 2, 20, { align: 'center' });
      
      // Add date range if provided
      if (options.dateRange) {
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text(
          `Period: ${new Date(options.dateRange.from).toLocaleDateString()} - ${new Date(options.dateRange.to).toLocaleDateString()}`,
          pageWidth / 2,
          30,
          { align: 'center' }
        );
      }

      let currentY = 50;

      // Check space for summary
      if (data.summary) {
        currentY = checkAndAddNewPage(
          Object.keys(data.summary).length * 7 + 20,
          currentY
        );

        doc.setFontSize(14);
        doc.setTextColor(66, 139, 202);
        doc.text('Summary', 14, currentY);
        
        let yPos = currentY + 10;
        Object.entries(data.summary).forEach(([key, value]: [string, any]) => {
          doc.setFontSize(10);
          doc.setTextColor(50, 50, 50);
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          const formattedValue = typeof value === 'number' 
            ? options.currency === 'NGN' 
              ? `₦${value.toLocaleString()}` 
              : `$${value.toLocaleString()}`
            : value.toString();
          doc.text(`${formattedKey}: ${formattedValue}`, 14, yPos);
          yPos += 7;
        });
        
        currentY = yPos + 10;
      }
      
      // Check space for each chart
      if (options.charts && options.charts.length > 0) {
        options.charts.forEach(chart => {
          currentY = checkAndAddNewPage(90, currentY); // Chart height + margins
          currentY = this.drawChart(doc, chart, currentY);
        });
      }

      // Check space for table
      if (data.details && data.details.length > 0) {
        currentY = checkAndAddNewPage(
          Math.min(data.details.length * 10 + 30, pageHeight - 40),
          currentY
        );

        doc.setFontSize(14);
        doc.setTextColor(66, 139, 202);
        doc.text('Detailed Information', 14, currentY);
        currentY += 10;

        // Sort data if requested
        if (options.tableOptions?.sortBy) {
          const sortBy = options.tableOptions.sortBy;
          const direction = options.tableOptions.sortDirection || 'asc';
          data.details.sort((a: any, b: any) => {
            const aVal = a[sortBy];
            const bVal = b[sortBy];
            return direction === 'asc' 
              ? (aVal > bVal ? 1 : -1)
              : (aVal < bVal ? 1 : -1);
          });
        }

        // Select columns
        const columns = options.tableOptions?.columns || Object.keys(data.details[0]);

        // Generate table
        (doc as any).autoTable({
          startY: currentY,
          head: [columns.map(col => col.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))],
          body: data.details.map((row: any) => columns.map(col => {
            const value = row[col];
            return typeof value === 'number' && options.currency
              ? `${options.currency === 'NGN' ? '₦' : '$'}${value.toLocaleString()}`
              : value?.toString() || '';
          })),
          theme: 'grid',
          headStyles: {
            fillColor: [66, 139, 202],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 10,
            cellPadding: 5
          },
          columnStyles: {
            // Add right alignment for number columns
            ...columns.reduce((acc, col, index) => {
              if (typeof data.details[0][col] === 'number') {
                acc[index] = { halign: 'right' };
              }
              return acc;
            }, {})
          }
        });

        // Get the final Y position after table
        currentY = (doc as any).lastAutoTable.finalY + 10;
      }

      // Add footer with page numbers to all pages
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Add page number
        addPageNumber(i, pageCount);
        
        // Add generation timestamp on last page only
        if (i === pageCount) {
          doc.text(
            `Generated on ${new Date().toLocaleString()}`,
            20,
            pageHeight - 10,
            { align: 'left' }
          );
        }
        
        // Add watermark if provided
        if (options.watermark) {
          doc.setTextColor(230, 230, 230);
          doc.setFontSize(60);
          doc.text(
            options.watermark,
            pageWidth / 2,
            pageHeight / 2,
            { align: 'center', angle: 45 }
          );
        }
      }

      return doc.output('arraybuffer');
    } catch (error) {
      throw new PDFGenerationError(
        'Failed to generate report PDF',
        'REPORT_GENERATION_ERROR',
        error
      );
    }
  }
};
