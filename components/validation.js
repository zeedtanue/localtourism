
const validation = (values) => {
    let errors={}

    if(!values.email){
        errors.email = "email or name is required"
    }
    if(!values.comment){
        errors.comment="comment is required"
    }
    return errors;
}

export default validation;
