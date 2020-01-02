const createUriToValidate = (uid, email, username, fullName, root) => {

    return ["uid="+uid.toString(), 
            "email="+email, 
            "username="+username, 
            "full_name="+fullName, 
            "root="+root.toString()].join("&")
}

const BackofficeValidator = {

    isFromBackoffice: ({uid, email, username, full_name, root, hmac}) => {
        const uriToValidate = createUriToValidate(uid, email, username, full_name, root);

        var crypto = require('crypto'),
        // TODO: poner la key como var de entorno
        generatedHmac = crypto.createHmac('sha256', 'h0l4s0yunp1n0');
        generatedHmac.update(uriToValidate);
 
        var result = generatedHmac.digest('hex');

        return hmac === result;
    }
}

export default BackofficeValidator;