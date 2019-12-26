import {BackofficeValidator} from './backOfficeValidator';
//GET - Return all tvshows in the DB
export function backofficeCallback(req, res) {
    uid = req.params.uid
    email = req.params.email
    username = req.params.username
    fullName = req.params.full_name
    root = req.params.root
    hmac = req.params.hmac
   
    if (!BackofficeValidator.isFromBackoffice(uid, email, username, fullName, root, hmac)){
        return "Falló la validación, el backoffice envió una firma incorrecta"
    }

    return String.join("\n",
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "<head>",
        "    <meta charset=\"UTF-8\">",
        "    <title>Logueandote</title>",
        "</head>",
        "<body>",
        "    <h2>Redirigiendo...</h2>",
        "    <script>",
        "        /* Store the token into localStorage */",
        "        window.localStorage.setItem('token', '" + token + "');",
        "        /* Redirect to the actual application */",
        "        window.location.href = '/';",
        "    </script>",
        "</body>",
        "</html >"
    );

}
