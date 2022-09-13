
let ajax = {};

ajax.getTodos = function(){
  return fetch('/todos').then(res => res.json());
};

ajax.postTodo = function(data){
  const params = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return fetch('/todos',params).then(res => res.json());
};

export default ajax;
