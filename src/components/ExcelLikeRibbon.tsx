import { useRef } from "react";
import {
  SpreadsheetComponent,
  Inject,
  Ribbon,
  FormulaBar,
  SheetTabs,
  Sort,
  Filter,
  DataValidation,
  ContextMenu,
  Resize,
  KeyboardNavigation,
  Open,
  Save,
} from "@syncfusion/ej2-react-spreadsheet";

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-spreadsheet/styles/material.css";
// import "@syncfusion/ej2-react-ribbon/styles/material.css";

interface Props {
  isComplianceActive?: boolean;
}

export default function ExcelLikeRibbon({ isComplianceActive = true }: Props) {
  const spreadsheetRef = useRef<SpreadsheetComponent>(null);

  const onCreated = () => {
    if (!spreadsheetRef.current) return;

    const tabs: any[] = [];

    if (isComplianceActive) {
      tabs.push({
        header: { text: "Compliance" },
        content: [
          {
            header: "Validation",
            items: [
              { id: "approve", text: "Approve" },
              { id: "reject", text: "Reject" }
            ]
          }
        ]
      });
    }

    spreadsheetRef.current.addRibbonTabs(tabs);
  };

  return (
    <div className="h-full w-full">
      <SpreadsheetComponent
        ref={spreadsheetRef}
        showRibbon
        showFormulaBar
        showSheetTabs
        allowSorting
        allowFiltering
        allowDataValidation
        allowOpen
        allowSave
        height="100%"
        width="100%"
        created={onCreated}
      >
        <Inject
          services={[
            Ribbon,
            FormulaBar,
            SheetTabs,
            Sort,
            Filter,
            DataValidation,
            ContextMenu,
            Resize,
            KeyboardNavigation,
            Open,
            Save,
          ]}
        />
      </SpreadsheetComponent>
    </div>
  );
}