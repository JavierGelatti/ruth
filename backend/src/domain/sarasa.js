export const respondWithSuccess = (res, data) => {
    res.status(200).send(data);
}

export const respondWithError = (res, error) => {
    res.status(500).send(error)
}