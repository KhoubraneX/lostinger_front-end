import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = (type = "success", message = "successfully") => {
    if (type === 'error') {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_LEFT
        });
    } else if (type === 'info') {
        toast.info(message, {
            position: toast.POSITION.BOTTOM_LEFT
        });
    } else if (type === 'warn') {
        toast.warn(message, {
            position: toast.POSITION.BOTTOM_LEFT
        });
    } else {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }
};

export default showToastMessage