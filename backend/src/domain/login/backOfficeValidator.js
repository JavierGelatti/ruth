const createUriToValidate = (uid, email, username, fullName, root) => {

    return ["uid="+uid.toString(),
            "email="+email,
            "username="+username,
            "full_name="+fullName,
            "root="+root.toString()].join("&")
};

const BackofficeValidator = {

    isFromBackoffice: ({uid, email, username, full_name, root, hmac}) => {
        const uriToValidate = createUriToValidate(uid, email, username, full_name, root);

        let crypto = require('crypto'),
        generatedHmac = crypto.createHmac('sha256', process.env.BACKOFFICE_SECRET);
        generatedHmac.update(uriToValidate);

        let result = generatedHmac.digest('hex');

        return hmac === result;
    }
};

export default BackofficeValidator;
