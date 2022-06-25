import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

import { InputSwitch } from "primereact/inputswitch";

import "../CSS/DataTableDemo.css";

//import uuid npm library
import { v4 as uuidv4 } from "uuid";

const DataTableCrudDemo = ({ subTasks, setSubTasks }) => {
  //creating subtask object for new subtask
  let emptySubTask = {
    subtaskid: "",
    taskid: "",
    subtask: "",
    desc: "",
    link: "",
    completed: false,
  };

  //All states and refs
  const [stDialog, setStDialog] = useState(false);
  const [deleteStDialog, setDeleteStDialog] = useState(false);
  const [deleteStsDialog, setDeleteStsDialog] = useState(false);
  const [subTask, setSubTask] = useState(emptySubTask);
  const [selectedSubTasks, setSelectedSubTasks] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

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

  const hideDialog = () => {
    setSubmitted(false);
    setStDialog(false);
  };

  const saveSubTask = async () => {
    setSubmitted(true);

    if (subTask.subtask.trim()) {
      let _sts = [...subTasks];
      let _subTask = { ...subTask };

      if (subTask.subtaskid) {
        const index = await findIndexById(subTask.subtaskid);

        _sts[index] = _subTask;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "SubTask Updated",
          life: 3000,
        });
      } else {
        _subTask.subtaskid = await createId();

        _sts.push(_subTask);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "SubTask Created",
          life: 3000,
        });
      }

      setSubTasks(_sts);
      setStDialog(false);
      setSubTask(emptySubTask);
    }
  };

  const hideDeleteStsDialog = () => {
    setDeleteStDialog(false);
    setDeleteStsDialog(false);
  };

  const deleteSelectedSts = () => {
    let _sts = subTasks.filter((val) => !selectedSubTasks.includes(val));
    setSubTasks(_sts);
    setDeleteStsDialog(false);
    setSelectedSubTasks(null);

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < subTasks.length; i++) {
      if (subTasks[i].subtaskid === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let myuuid = uuidv4();
    return myuuid;
  };

  const openNew = () => {
    setSubTask(emptySubTask);
    setSubmitted(false);
    setStDialog(true);
  };

  const confirmDeleteSelected = () => {
    setDeleteStsDialog(true);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _subTask = { ...subTask };
    _subTask[`${name}`] = val;

    setSubTask(_subTask);
  };

  const onToggleChange = (e, name) => {
    const val = e.value;
    let _subTask = { ...subTask };
    _subTask[`${name}`] = val;

    setSubTask(_subTask);
  };

  const importCSV = (e) => {
    const file = e.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target.result;
      const data = csv.split("\n");

      // Prepare DataTable
      const cols = data[0].replace(/['"]+/g, "").split(",");
      data.shift();

      const importedData = data.map((d) => {
        d = d.split(",");

        const thisRow = {};

        cols.forEach((col, index) => {
          thisRow[col] = d[index];
        });

        thisRow.subtaskid = createId();

        thisRow["completed"] = thisRow["completed"] === "true" ? true : false;

        console.log(thisRow);
        return thisRow;
      });

      const _subTasks = [...subTasks, ...importedData];

      setSubTasks(_subTasks);
    };

    reader.readAsText(file, "UTF-8");
  };

  const hideDeleteStDialog = () => {
    setDeleteStDialog(false);
  };

  const deleteSt = () => {
    let _sts = subTasks.filter((val) => val.subtaskid !== subTask.subtaskid);
    setSubTasks(_sts);
    setDeleteStDialog(false);
    setSubTask(emptySubTask);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "SubTask Deleted",
      life: 3000,
    });
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };
  //action body teemplate for edit and delete in datatable

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success "
          style={{ margin: "0.7rem" }}
          onClick={() => editSubTask(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger "
          style={{ margin: "0.7rem" }}
          onClick={() => confirmDeleteSubTask(rowData)}
        />
      </React.Fragment>
    );
  };

  const stDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveSubTask}
      />
    </React.Fragment>
  );

  const deleteStDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteStDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSt}
      />
    </React.Fragment>
  );

  const deleteStsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteStsDialog}
        style={{ marginRight: "1.2rem" }}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        style={{ marginLeft: "1.2rem" }}
        onClick={deleteSelectedSts}
      />
    </React.Fragment>
  );

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="New"
          icon="pi pi-plus"
          style={{ margin: "1.5rem" }}
          className="p-button-success mr-2 openNewBtn"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger deleteSelectedBtn"
          onClick={confirmDeleteSelected}
          disabled={!selectedSubTasks || !selectedSubTasks.length}
        />
      </React.Fragment>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <FileUpload
          mode="basic"
          name="demo[]"
          customUpload={true}
          auto
          url="./upload"
          accept=".csv"
          chooseLabel="Import"
          className="mr-2 inline-block importCsvBtn"
          uploadHandler={importCSV}
        />
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help  exportCsvBtn"
          style={{ margin: "1.5rem" }}
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          style={{ marginBottom: "1rem", backgroundColor: "#273A50" }}
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={subTasks || null}
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
          style={{ color: "#273A50" }}
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

      <Dialog
        visible={stDialog}
        zIndex={500000}
        style={{ width: "450px", zIndex: 5000 }}
        header="SubTask Details"
        modal
        className="p-fluid"
        footer={stDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="SubTask">SubTask</label>
          <InputText
            id="subTask"
            value={subTask.subtask}
            onChange={(e) => onInputChange(e, "subtask")}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !subTask.subtask,
            })}
          />
          {submitted && !subTask.subtask && (
            <small className="p-error">SubTask is required.</small>
          )}
        </div>

        <div className="field">
          <label htmlFor="Description">Description</label>
          <InputText
            id="
              description"
            value={subTask.desc}
            onChange={(e) => onInputChange(e, "desc")}
            autoFocus
          />
        </div>

        <div className="field">
          <label htmlFor="Link">URL</label>
          <InputText
            id="
              link"
            value={subTask.link}
            onChange={(e) => onInputChange(e, "link")}
            autoFocus
          />
        </div>

        <div className="field">
          <h5>Completed </h5>
          <InputSwitch
            checked={subTask.completed}
            onChange={(e) => onToggleChange(e, "completed")}
          />
        </div>
      </Dialog>

      <Dialog
        visible={deleteStDialog}
        zIndex={5000}
        style={{ width: "450px", zIndex: 5000 }}
        header="Confirm"
        modal
        footer={deleteStDialogFooter}
        onHide={hideDeleteStDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem", margin: "2rem" }}
          />
          {subTask && (
            <span>
              Are you sure you want to delete <b>{subTask.subtask}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteStsDialog}
        style={{ width: "450px", zIndex: 50000 }}
        header="Confirm"
        modal
        footer={deleteStsDialogFooter}
        onHide={hideDeleteStsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {subTask && (
            <span>Are you sure you want to delete the selected products?</span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteStsDialog}
        style={{ width: "450px", zIndex: 50000 }}
        header="Confirm"
        modal
        footer={deleteStsDialogFooter}
        onHide={hideDeleteStsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {selectedSubTasks && (
            <span>Are you sure you want to delete the selected products?</span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default DataTableCrudDemo;
