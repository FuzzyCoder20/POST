import React, { useState } from 'react'
import "./css/sidebar.css"
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';


import { Modal } from '@material-ui/core';
import firebase from 'firebase';
import { db,storage } from './firebase';
function Sidebar() {

const [open, setOpen] = useState(false);
const [file, setFile] = useState(null);
const [uploading, setUploading] = useState(false)

const handleOpen=()=>{
    setOpen(true)
}
const handleClose=()=>{
    setOpen(false)
}

const handleChange = (e) => {
    if (e.target.files[0]) {
        setFile(e.target.files[0])
    }
}

const handleUpload=(event)=>{
    event.preventDefault();
    setUploading(true);

    storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
        console.log(snapshot)
        storage.ref("files").child(file.name).getDownloadURL().then(url=>{
            db.collection("myfiles").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                filename:file.name,
                fileURL:url,
                size:snapshot._delegate.bytesTransferred
            })

            setUploading(false);
            setFile(null);
            setOpen(false)
        })
    })
            
}
    return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
       >
        
        <div className="modal_pop">
                    <form>
                        <div className="modalHeading">
                            <h3>Select file you want to upload</h3>
                            
                        </div>
                        

                        <div className="modalBody">
                            {
                                uploading ? (<p className="uploading">Uploading...</p>) : (
                                    <>
                                        <input type="file" onChange={handleChange}/>
                                        <input type="submit" className="post__submit" value="Upload"  onClick={handleUpload}/>
                                    </>
                                )
                            }
                            
                        </div>
                        
         
                        
                        
                    </form>
                </div>

        </Modal>

        <div className="sidebar">
            <div className="sidebar_btn">
                <button onClick={handleOpen}>
                    <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"/>
                    <span>New</span>
                </button>
            </div>

            <div className="sidebar_options">
                <div class="sidebar_option sidebar_option-Active">
                    <MobileScreenShareIcon/>
                    <span>My Storage device</span>
                </div>

              
            </div>

         

          
        </div>
        </>
    )
}

export default Sidebar
