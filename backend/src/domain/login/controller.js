import BackofficeValidator from './backOfficeValidator';

const BackofficeController = () => ({

    callback: (req) => {
        const  { query }  = req;

        if (!BackofficeValidator.isFromBackoffice(query)) {
            return "Falló la validación, el backoffice envió una firma incorrecta"
        }

        return ["\n",
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
        ].join("");
    },
});

export default BackofficeController;
