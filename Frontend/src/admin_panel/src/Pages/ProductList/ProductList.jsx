import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../Redux/apiCalls";
import styles from "./productList.module.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const products = productState?.products ?? [];
  const isFetching = productState?.isFetching ?? false;
  const error = productState?.error ?? false;

  useEffect(() => {
    if (!products.length) {
      getProducts(dispatch);
    }
  }, [dispatch, products.length]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  if (isFetching) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products. Please try again later.</p>;
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className={styles.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.productList}>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}