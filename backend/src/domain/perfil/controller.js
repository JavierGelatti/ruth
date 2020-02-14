import { pick } from 'lodash';

const Controller = () => ({

    me: (req) => {
        return pick(req.session.usuario, 'nombre', 'email')
    },

});

export default Controller;
