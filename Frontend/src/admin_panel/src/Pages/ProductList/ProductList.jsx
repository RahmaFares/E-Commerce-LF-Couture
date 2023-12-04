import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./productList.module.css";
import { WeddingProducts, SoireeProducts, AccessoriesProducts } from "../../../../All_Data";

export default function ProductList() {
  const allProducts = [...WeddingProducts, ...SoireeProducts, ...AccessoriesProducts];

  const rows = allProducts.map((product, index) => ({
    id: product.id,
    title: product.title,
    img: product.img,
    price: product.price,
    inStock: true, // Assuming all products are in stock
  }));

  const handleDelete = (id) => {
    // Dummy delete handler
    console.log("Delete product with id:", id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.productListItem}>
            <img className={styles.productListImg} src={params.row.img} alt={params.row.title} />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className={styles.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.productList}>
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
