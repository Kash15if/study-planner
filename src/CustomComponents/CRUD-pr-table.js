import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../Services/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
// import "./DataTableDemo.css";

// import { useState, useEffect } from "react";

const DataTableCrudDemo = () => {
  //creating subtask object for new subtask
  let emptyProduct = {
    subtaskid: null,
    taskid: null,
    subtask: "",
    desc: "",
    link: "",
    completed: false,
  };

  //All states and refs
  const [subTasks, setSubTasks] = useState("");
  const [stDialog, setStDialog] = useState(false);
  const [deleteStDialog, setDeleteStDialog] = useState(false);
  const [deleteStsDialog, setDeleteStsDialog] = useState(false);
  const [subTask, setSubTask] = useState(emptyProduct);
  const [selectedSubTasks, setSelectedSubTasks] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/get/subtask")
      .then((res) => res.json())
      .then((dataX) => {
        setSubTasks(dataX);
      });
  }, []);

  //function for edit popup to open

  const editSubTask = (subTaskRow) => {
    setSubTask({ ...subTaskRow });
    setStDialog(true);
  };

  const confirmDeleteSubTask = (subTaskRow) => {
    setSubTask(subTaskRow);
    setDeleteStDialog(true);
  };

  const statusBodyTemplate = (rowData) => {
    if (rowData.completed)
      return (
        <i
          className="pi pi-check-circle"
          style={{ color: "green", fontSize: "1.3rem" }}
        ></i>
      );
    else
      return (
        <i
          className="pi pi-times-circle"
          style={{ color: "red", fontSize: "1.3rem" }}
        ></i>
      );
  };

  //header for datatable

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Manage SubTasks</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  //action body teemplate for edit and delete in datatable

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success m-2"
          style={{ marginRight: "1.2rem" }}
          onClick={() => editSubTask(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger m-2"
          onClick={() => confirmDeleteSubTask(rowData)}
        />
      </React.Fragment>
    );
  };

  return (
    subTasks && (
      <div className="datatable-crud-demo">
        <div className="card">
          <DataTable
            ref={dt}
            value={subTasks}
            selection={selectedSubTasks}
            onSelectionChange={(e) => setSelectedSubTasks(e.value)}
            dataKey="subtask"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
              exportable={false}
            ></Column>
            <Column
              field="subtask"
              header="SubTask"
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="desc"
              header="Description"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column field="link" header="Link"></Column>
            <Column
              field="completed"
              header="Completed"
              body={statusBodyTemplate}
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "8rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    )
  );
};

export default DataTableCrudDemo;
