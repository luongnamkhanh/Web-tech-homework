import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

const SmartPhone = () => {
    const [data, setData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const [viewShow, setViewShow] = useState(false);
    const handleViewShow = () => { setViewShow(true) };
    const handleViewClose = () => { setViewShow(false) };
    // for edit model
    const [viewEdit, setEditShow] = useState(false);
    const handleEditShow = () => { setEditShow(true) };
    const handleEditClose = () => { setEditShow(false) };
    // for delete model
    const [viewDelete, setDeleteShow] = useState(false);
    const handleDeleteShow = () => { setDeleteShow(true) };
    const handleDeleteClose = () => { setDeleteShow(false) };
    // for add model
    const [viewAdd, setAddShow] = useState(false);
    const handleAddShow = () => { setAddShow(true) };
    const handleAddClose = () => { setAddShow(false) };

    // define here local state that store the form Data
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [operatingSystem, setOperatingSystem] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [price, setPrice] = useState('')
    const [storage, setStorage] = useState('')
    const [ram, setRam] = useState('')
    const [screenSize, setScreenSize] = useState('')
    const [batteryCapacity, setBatteryCapacity] = useState('')


    const [Delete,setDelete] = useState(false)
    // ID for edit and delete
    const [id, setId] = useState('')


    const GetSmartPhoneData = () => {
        // here we will get all smartphone data from backend
        const url = 'http://localhost:3000/api/smartphones'
        axios.get(url)
            .then((response) => {
                const result = response.data
                const { status, message, data } = result
                if (status !== 'success') {
                    alert(message, status)
                } else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const handleSubmit = () => {
        const url = 'http://localhost:3000/api/smartphones'
        const Credentials = { name, brand, operatingSystem, releaseDate, price, storage, ram, screenSize, batteryCapacity}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'success') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = () => {
        const url = `http://localhost:3000/api/smartphones/${id}`
        axios.put(url, rowData)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'success') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
     //handle Delete Function 
     const handleDelete = () =>{
        const url = `http://localhost:3000/api/smartphones/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'success') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetSmartPhoneData()
    }, [])
    return (
        <>
            <div>
                <h1 className="text-center">SmartPhone</h1>
                <div className="row">
                    <div className="mt-5 mb-4">
                        <Button variant="primary" onClick={()=>{handleAddShow()}}><i className='fa fa-plu'></i>
                            Add New Product
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive">
                        <table className='table table-striped table-hover table-bordered'>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Brand</th>
                                    <th>Product Operating System</th>
                                    <th>Product Storage</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.operatingSystem}</td>
                                            <td>{item.storage}</td>
                                            <td style={{ minWidth: 190 }}>
                                                <Button size='sm' variant="primary" onClick={() => { handleViewShow(setRowData(item)) }}><i className='fa fa-edit'>View</i></Button>
                                                <Button size='sm' variant="warning" onClick={( )=> {handleEditShow(setRowData(item),setId(item._id))}}><i className='fa fa-edit'>Edit</i></Button>
                                                <Button size='sm' variant="danger" onClick={() => {handleViewShow(setRowData(item),setId(item._id), setDelete(true))}}><i className='fa fa-trash'>Delete</i></Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="model-view-box">
                    <Modal
                        show={viewShow}
                        onHide={handleViewClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>View Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    Name
                                    <input type="text" className='form-control' value={rowData.name} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Brand
                                    <input type="text" className='form-control' value={rowData.brand} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Operating System
                                    <input type="text" className='form-control' value={rowData.operatingSystem} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Release Date
                                    <input type="text" className='form-control' value={rowData.releaseDate} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Price
                                    <input type="number" className='form-control' value={rowData.price} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Storage
                                    <input type="text" className='form-control' value={rowData.storage} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    RAM
                                    <input type="text" className='form-control' value={rowData.ram} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Screen Size
                                    <input type="text" className='form-control' value={rowData.screenSize} readOnly />
                                </div>
                                <div className="form-group mt-3">
                                    Battery Capacity
                                    <input type="text" className='form-control' value={rowData.batteryCapacity} readOnly />
                                </div>
                                {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Product</Button>
                                )
                            }
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleViewClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                {/* Modal for submit data to the database */}
                <div className="model-view-box">
                    <Modal
                        show={viewAdd}
                        onHide={handleAddClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    Name
                                    <input type="text" className='form-control' onChange={(e)=> setName(e.target.value)} placeholder='Please enter name' />
                                </div>
                                <div className="form-group mt-3">
                                    Brand
                                    <input type="text" className='form-control' onChange={(e)=> setBrand(e.target.value)} placeholder='Please enter brand' />
                                </div>
                                <div className="form-group mt-3">
                                    Operating System
                                    <input type="text" className='form-control' onChange={(e)=> setOperatingSystem(e.target.value)} placeholder='Please enter Operating System' />
                                </div>
                                <div className="form-group mt-3">
                                    Release Date
                                    <input type="date" className='form-control' onChange={(e)=> setReleaseDate(e.target.value)} placeholder='Please enter Release Date' />
                                </div>
                                <div className="form-group mt-3">
                                    Price
                                    <input type="number" className='form-control' onChange={(e)=> setPrice(e.target.value)} placeholder='Please enter Price'/>
                                </div>
                                <div className="form-group mt-3">
                                    Storage
                                    <input type="text" className='form-control' onChange={(e)=> setStorage(e.target.value)} placeholder='Please enter Storage' />
                                </div>
                                <div className="form-group mt-3">
                                    RAM
                                    <input type="text" className='form-control' onChange={(e)=> setRam(e.target.value)} placeholder='Please enter RAM' />
                                </div>
                                <div className="form-group mt-3">
                                    Screen Size
                                    <input type="text" className='form-control' onChange={(e)=> setScreenSize(e.target.value)} placeholder='Please enter Screen Size' />
                                </div>
                                <div className="form-group mt-3">
                                    Battery Capacity
                                    <input type="text" className='form-control' onChange={(e)=> setBatteryCapacity(e.target.value)} placeholder='Please enter Battery Capacity'/>
                                </div>
                                <Button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>Add Product</Button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleAddClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                {/* Modal for update data to the database */}
                <div className='model-box-view'>
                <Modal
                    show={viewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <div className="form-group">
                                    Name
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, name: e.target.value}))} placeholder='Please enter name' value={rowData.name}/>
                                </div>
                                <div className="form-group mt-3">
                                    Brand
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, brand: e.target.value}))} placeholder='Please enter brand' value={rowData.brand}/>
                                </div>
                                <div className="form-group mt-3">
                                    Operating System
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, operatingSystem: e.target.value}))} placeholder='Please enter Operating System'value={rowData.operatingSystem} />
                                </div>
                                <div className="form-group mt-3">
                                    Release Date
                                    <input type="date" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, releaseDate: e.target.value}))} placeholder='Please enter Release Date' value={rowData.releaseDate}/>
                                </div>
                                <div className="form-group mt-3">
                                    Price
                                    <input type="number" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, price: e.target.value}))} placeholder='Please enter Price'value={rowData.price}/>
                                </div>
                                <div className="form-group mt-3">
                                    Storage
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, storage: e.target.value}))} placeholder='Please enter Storage' value={rowData.storage}/>
                                </div>
                                <div className="form-group mt-3">
                                    RAM
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, ram: e.target.value}))} placeholder='Please enter RAM'value={rowData.ram} />
                                </div>
                                <div className="form-group mt-3">
                                    Screen Size
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, screenSize: e.target.value}))} placeholder='Please enter Screen Size'value={rowData.screenSize} />
                                </div>
                                <div className="form-group mt-3">
                                    Battery Capacity
                                    <input type="text" className='form-control' onChange={(e)=> setRowData(prev => ({...prev, batteryCapacity: e.target.value}))} placeholder='Please enter Battery Capacity'value={rowData.batteryCapacity}/>
                                </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Update Product</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        </>
    )
}

export default SmartPhone;