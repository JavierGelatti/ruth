const asyncMiddleware = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next))
  .then((data) => respondWithSuccess(res, data))
  .catch(next);

export default asyncMiddleware;

const respondWithSuccess = (res, data) => {
  res.status(200).send(data);
};
