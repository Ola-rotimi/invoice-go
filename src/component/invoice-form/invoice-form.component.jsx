import { useEffect, useState } from "react";

import Loading from "../loading-page/loading.component";
import InvoiceDetails from "./invoice-details/invoice-details.component";
import InvoicePrice from "./invoice-price/invoice-price.component";
import "./invoice-form.style.scss";

const InvoiceForm = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="invoice-form">
      <InvoiceDetails />
      <InvoicePrice />
    </div>
  );
};

export default InvoiceForm;
