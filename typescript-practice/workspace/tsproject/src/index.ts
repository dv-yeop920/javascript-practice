
import axios from 'axios';
import canUseDom from 'can-use-dom';


(async () => {
  const response = await axios('http://localhost:33088/api/todolist');
  console.log(response.data);
  console.log(canUseDom);
})();