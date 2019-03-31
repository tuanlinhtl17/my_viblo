import ActionCable from 'actioncable';
import { WS_URL } from '../constants'

const createConsumer = () => {
  window.App.cable = ActionCable.createConsumer(`${WS_URL}`)
};

export default createConsumer;
