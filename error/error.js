const createError=(status,message,success)=>{
const error=new Error();
error.status=status;
error.message=message;
error.success=success;
return error;
}
export default createError;