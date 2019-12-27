const BackofficeValidator = {

    createUriToValidate: (uid, email, username, fullName, root) => {

        return ["uid="+uid.toString(), 
                "email="+email, 
                "username="+username, 
                "full_name="+fullName, 
                "root="+root.toString()].join("&")
    },

    isFromBackoffice: (uid, email, username, fullName, root, hmac) => {
        const hmacBackoffice = hmac.toUpperCase();
        const uriToValidate = this.createUriToValidate(uid, email, username, fullName, root);

        var crypto = require('crypto'),
        hmac = crypto.createHmac('sha256', 'h0l4s0yunp1n0');
        hmac.update(uriToValidate);
 
        var result = hmac.digest('hex');

        return hmacBackoffice === result;
    }
}

export default BackofficeValidator;