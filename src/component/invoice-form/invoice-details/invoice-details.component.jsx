import React, { useState } from "react";

const detailsFormField = {
  currency: "",
  invoiceNumber: "#",
  invoiceDate: "",
  dueDate: "",
  from: "",
  billTo: "",
};

const InvoiceDetails = () => {
  const [detailsForm, setDetailsForm] = useState(detailsFormField);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetailsForm({ ...detailsForm, [name]: value });
  };

  return (
    <section className="invoice-details">
      <div className="invoice-top">
        <h1>Invoice Details</h1>
        <label>
          Currency:
          <select name="currency" onChange={handleDetailsChange}>
            <option value="USD">USD</option>
          </select>
        </label>
      </div>
      <div className="invoice-middle">
        <div className="invoice-number">
          <label>
            Invoice Number
            <input
              type="text"
              name="invoiceNumber"
              value={detailsForm.invoiceNumber}
              onChange={handleDetailsChange}
            />
          </label>
        </div>
        <div className="date">
          <label>
            Date
            <input
              type="date"
              name="invoiceDate"
              value={detailsForm.invoiceDate}
              onChange={handleDetailsChange}
            />
          </label>
        </div>
        <div className="due-date">
          <label>
            Due Date
            <input
              type="date"
              name="dueDate"
              value={detailsForm.dueDate}
              onChange={handleDetailsChange}
            />
          </label>
        </div>
      </div>
      <div className="invoice-bottom">
        <div className="from">
          <label>
            From
            <textarea
              name="from"
              value={detailsForm.from}
              placeholder="Enter name here"
              onChange={handleDetailsChange}
            />
          </label>
        </div>
        <div className="bill-to">
          <label>
            Bill To
            <textarea
              name="billTo"
              value={detailsForm.billTo}
              placeholder="Enter name here"
              onChange={handleDetailsChange}
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDetails;
