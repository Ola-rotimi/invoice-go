import { useState } from "react";
import { VscTrash } from "react-icons/vsc";
import { GrAdd } from "react-icons/gr";
import { RiFileTextLine } from "react-icons/ri";

const itemDetails = {
  description: "",
  quantity: "",
  price: "",
  total: "",
};

const noteDetails = {
  note: "",
};

const InvoicePrice = () => {
  const [item, setItem] = useState([itemDetails]);
  const [note, setNote] = useState([noteDetails]);

  const handleAddItem = () => {
    setItem([
      ...item,
      {
        description: "",
        quantity: "",
        price: "",
        total: "",
      },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const newItem = [...item];
    newItem[index][field] = value;
    setItem(newItem);
  };

  const handleItemDelete = (index) => {
    const newItem = [...item];
    newItem.splice(index, 1);
    setItem(newItem);
  };

  const invoiceTotal = item.reduce((total, item) => {
    return total + item.total;
  }, 0);

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <section className="invoice-price">
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Description</th>
            <th colSpan={1}>Quantity</th>
            <th colSpan={1}>Price</th>
            <th colSpan={1}>Total</th>
            <th colSpan={1}></th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr key={index}>
              <td colSpan={3}>
                <input
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(index, "description", e.target.value)
                  }
                />
              </td>
              <td colSpan={1}>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                />
              </td>
              <td colSpan={1}>
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                />
              </td>
              <td colSpan={1}>{item.quantity * item.price}</td>
              <td colSpan={1}>
                <button onClick={() => handleItemDelete(index)}>
                  <VscTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add_total-item">
        <button onClick={handleAddItem}>
          <GrAdd className="icon" /> Add new item
        </button>
        <div className="total">
          <span>Total</span>
          <span>${invoiceTotal}</span>
        </div>
      </div>
      <div className="note">
        <label htmlFor="note">
          <textarea
            name="note"
            id="note"
            value={note.note}
            onChange={handleNoteChange}
            placeholder="Note to recipient"
          />
        </label>
      </div>
      <div className="invoice-price__btn">
        <button className="btn btn--save">Generate invoice <RiFileTextLine /></button>
      </div>
    </section>
  );
};

export default InvoicePrice;
