import { useState } from 'react';
import './calc.css';

const standardSizes = [
  { label: 'Business Card', value: { width: 90, height: 50 } },
  { label: 'A4', value: { width: 210, height: 297 } },
  { label: 'A3', value: { width: 297, height: 420 } },
  { label: 'A5', value: { width: 148, height: 210 } },
  { label: 'A6', value: { width: 105, height: 148 } },
];

const printers = [
  { label: 'Printer 1', value: { width: 200, height: 280 } },
  { label: 'Printer 2', value: { width: 210, height: 297 } },
];

export default function PolygraphyCalculator() {
  const [layoutSize, setLayoutSize] = useState({ width: 90, height: 50 });
  const [paperSize, setPaperSize] = useState({ width: 210, height: 297 });
  const [printer, setPrinter] = useState(printers[0]);
  const [isCustomSize, setIsCustomSize] = useState(false); // For toggling custom size input fields

  const calculateLayout = () => {
    const margin = 2;  // 2mm margin between layouts
    const { width, height } = layoutSize;
    const { width: paperWidth = 210, height: paperHeight = 297 } = paperSize || {};  // Default paper size

    const { width: printerWidth, height: printerHeight } = printer.value;

    const layoutRows = Math.floor(printerHeight / (height + margin));
    const layoutColumns = Math.floor(printerWidth / (width + margin));

    const totalLayouts = layoutRows * layoutColumns;

    return { layoutRows, layoutColumns, totalLayouts };
  };

  const { layoutRows, layoutColumns, totalLayouts } = calculateLayout();

  // Calculate the font size dynamically based on the layout size
  const getFontSize = () => {
    return Math.max(10, layoutSize.width / 5); // Adjust 5 to scale the text size appropriately
  };

  return (
    <div className="polygraphy-calculator">
      <h1>Polygraphy Calculator</h1>

      <div className="fields-row">
        
        {/* Left side (Result & Visualization) */}
        <div className="fields-left">
          <h2>Result:</h2>
          <p>
            You can fit {totalLayouts} layouts on this paper. {' '}{layoutRows} rows and {layoutColumns} columns.
          </p>

          <h3>Single Layout Visualization</h3>
          <div className=" checkbox-container">
          
              
            <label>  <input
                type="checkbox"
                checked={isCustomSize}
                onChange={() => setIsCustomSize(!isCustomSize)}
              />
               Use Custom Size </label>
          </div>
          <div className="layout-container">
            <input
              type="number"
              value={layoutSize.width}
              onChange={(e) => {
                if (isCustomSize) {
                  setLayoutSize({ ...layoutSize, width: parseInt(e.target.value) });
                }
              }}
              readOnly={!isCustomSize}
              className="layout-input"
            />
            <svg
              width={layoutSize.width}
              height={layoutSize.height}
              style={{ border: '1px solid black' }}
            >
              <rect
                x="0"
                y="0"
                width={layoutSize.width}
                height={layoutSize.height}
                fill="lightgray"
                stroke="black"
              />
              <text
                x={layoutSize.width / 2}
                y={layoutSize.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={getFontSize()}
              >
                {`${layoutSize.width} x ${layoutSize.height}`}
              </text>
            </svg>
            <input
              type="number"
              value={layoutSize.height}
              onChange={(e) => {
                if (isCustomSize) {
                  setLayoutSize({ ...layoutSize, height: parseInt(e.target.value) });
                }
              }}
              readOnly={!isCustomSize}
              className="layout-input"
            />

            
          </div>

          <h3>2D Layout Visualization on Paper</h3>
          <svg width={paperSize.width} height={paperSize.height} style={{ border: '1px solid black' }}>
            {Array.from({ length: layoutRows }).map((_, rowIndex) =>
              Array.from({ length: layoutColumns }).map((_, colIndex) => {
                const x = colIndex * (layoutSize.width + 2);
                const y = rowIndex * (layoutSize.height + 2);
                return (
                  <g key={`${rowIndex}-${colIndex}`}>
                    <rect
                      x={x}
                      y={y}
                      width={layoutSize.width}
                      height={layoutSize.height}
                      fill="lightgray"
                      stroke="black"
                    />
                    <text
                      x={x + layoutSize.width / 2}
                      y={y + layoutSize.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={getFontSize()}
                    >
                      {`${layoutSize.width} x ${layoutSize.height}`}
                    </text>
                  </g>
                );
              })
            )}
          </svg>
        </div>

        <div className="fields-right">
          <div className="field-container">
            <label>Select Layout Size:</label>
            <select
              onChange={(e) =>
                setLayoutSize(JSON.parse(e.target.value))
              }
            >
              {standardSizes.map((size) => (
                <option key={size.label} value={JSON.stringify(size.value)}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field-container">
            <label>Select Paper Size:</label>
            <select
              onChange={(e) => setPaperSize(JSON.parse(e.target.value))}
            >
              {standardSizes.map((size) => (
                <option key={size.label} value={JSON.stringify(size.value)}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field-container">
            <label>Select Printer:</label>
            <select
              onChange={(e) =>
                setPrinter(printers.find((printer) => printer.label === e.target.value))
              }
            >
              {printers.map((printer) => (
                <option key={printer.label} value={printer.label}>
                  {printer.label}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
      
    </div>
  );
}
