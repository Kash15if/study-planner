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
  let emptySubTask = {
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
  const [subTask, setSubTask] = useState(emptySubTask);
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

  const hideDialog = () => {
    setSubmitted(false);
    setStDialog(false);
  };

  const saveSubTask = () => {
    setSubmitted(true);

    if (subTask.name.trim()) {
      let _sts = [...subTasks];
      let _subTask = { ...subTask };
      if (subTask.subtaskid) {
        const index = findIndexById(subTask.subtaskid);

        _sts[index] = _subTask;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        subTask.subtaskid = createId();
        _sts.push(_subTask);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
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
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };
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

  const deleteStsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteStsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedSts}
      />
    </React.Fragment>
  );

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

        <Dialog
          visible={stDialog}
          style={{ width: "450px" }}
          header="Product Details"
          modal
          className="p-fluid"
          footer={stDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            {/* <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Name is required.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <InputTextarea
              id="description"
              value={product.description}
              onChange={(e) => onInputChange(e, "description")}
              required
              rows={3}
              cols={20}
            />
          </div>

          <div className="field">
            <label className="mb-3">Category</label>
            <div className="formgrid grid">
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category1"
                  name="category"
                  value="Accessories"
                  onChange={onCategoryChange}
                  checked={product.category === "Accessories"}
                />
                <label htmlFor="category1">Accessories</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category2"
                  name="category"
                  value="Clothing"
                  onChange={onCategoryChange}
                  checked={product.category === "Clothing"}
                />
                <label htmlFor="category2">Clothing</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category3"
                  name="category"
                  value="Electronics"
                  onChange={onCategoryChange}
                  checked={product.category === "Electronics"}
                />
                <label htmlFor="category3">Electronics</label>
              </div>
              <div className="field-radiobutton col-6">
                <RadioButton
                  inputId="category4"
                  name="category"
                  value="Fitness"
                  onChange={onCategoryChange}
                  checked={product.category === "Fitness"}
                />
                <label htmlFor="category4">Fitness</label>
              </div>
            </div>
          </div>

          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="price">Price</label>
              <InputNumber
                id="price"
                value={product.price}
                onValueChange={(e) => onInputNumberChange(e, "price")}
                mode="currency"
                currency="USD"
                locale="en-US"
              />
            </div>
            <div className="field col">
              <label htmlFor="quantity">Quantity</label>
              <InputNumber
                id="quantity"
                value={product.quantity}
                onValueChange={(e) => onInputNumberChange(e, "quantity")}
                integeronly
              />
            </div>
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )} */}
          </div>
        </Dialog>

        <Dialog
          visible={deleteStDialog}
          style={{ width: "450px" }}
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
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    )
  );
};

export default DataTableCrudDemo;
