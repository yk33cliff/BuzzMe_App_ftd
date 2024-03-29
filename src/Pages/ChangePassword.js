import { useState } from "react"
import { toast } from 'react-hot-toast';
import ajaxUser from "../util/remote/ajaxUser";
import SystemModal from "../Components/Common/SystemModal";
import Loader from "../Components/Common/Loader";

const ChangePassword=(props)=>{

    const [loading, setLoading] = useState(false)
    const [old_password,setOldPassword] =useState("")
    const [new_password,setNewPassword] =useState("")

    const data={
        account_id: props.accountID,
        old_secure_string: old_password,
        new_secure_string: new_password
    }

    const handleUpdatePassword = async(e) =>{
        e.preventDefault()
        if(old_password.length>0 || new_password.length>0){
            setLoading(true)
            const server_response = await ajaxUser.changePassword(data);
            setLoading(false);
            if(server_response.status==="OK"){
                setOldPassword("");
                setNewPassword("");
                toast.success(server_response.message);
            }
            else{
                toast.error(server_response.message); 
            }
        }
        else{
            toast.error("Please enter all fields!")
        }  
    }
    

    const RenderFooter=(controls)=>{

        if(loading){
            return <Loader/>
        }else{

            return <> 
                    <button className="btn ripple btn-dark" type="button" onClick={controls.close}>Close</button>
                    <button 
                        type="button" 
                        className={`btn ripple btn-success`} 
                        onClick={handleUpdatePassword}>Save New Password</button>
                    </>
        }
    }

    return(
        <SystemModal
            title="Change Password"
            id="model-new-pass"
            size="md"
            footer={RenderFooter}
        >

            <div className="mb-4">
                <label htmlFor="">Enter Current Password</label>
                <input onChange={(e)=>setOldPassword(e.target.value)} value={old_password} type="password" className="form-control"/>
            </div>
            <div className="mb-4">
                <label htmlFor="">Set New Password</label>
                <input onChange={(e)=>setNewPassword(e.target.value)} value={new_password} type="password" className="form-control"/>
            </div>
       
        </SystemModal>
    )
}

export default ChangePassword
