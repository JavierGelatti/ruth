import BackofficeValidator from './backOfficeValidator';

const BackofficeController = () => ({

    callback: (req) => {
        const  { params }  = req.params;

        if (!BackofficeValidator.isFromBackoffice(params.uid, params.email,
            params.username, params.fullName, params.root, params.hmac)) {
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
            "        /* Redirect to the actual application */",
            "        window.location.href = '/';",
            "    </script>",
            "</body>",
            "</html >"
        );
    },
});

export default BackofficeController;
