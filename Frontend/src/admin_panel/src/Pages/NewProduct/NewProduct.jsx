import { useState } from "react";
import styles from "./newProduct.module.css";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories: cat };
                    addProduct(product, dispatch);
                });
            }
        );
    };

    return (
        <div className={styles.newProduct}>
            <h1 className={styles.addProductTitle}>New Product</h1>
            <form className={styles.addProductForm}>
                <div className={styles.addProductItem}>
                    <label>Image</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <br />
                <div className="addProductItem">
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Wedding Dress"
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="addProductItem">
                    <label>Description</label>
                    <input
                        name="desc"
                        type="text"
                        placeholder="description..."
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="addProductItem">
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        placeholder="100"
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="addProductItem">
                    <label>Categories</label>
                    <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
                </div>
                <br />
                <div className="addProductItem">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <br />
                <button onClick={handleClick} className={styles.addProductButton}>
                    Create
                </button>
            </form>
        </div>
    );
}
