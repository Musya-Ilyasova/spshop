import del from 'del';

import PATHS from '../paths.js';

export default function clean() {
	return del(PATHS.clean);
}
