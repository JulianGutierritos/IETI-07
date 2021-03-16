module.exports.list = (context, req, callback) => {
  var tasks = [{
	id: 1,
	description: "some description text ",
    responsible: {
        name: "Santiago Carrillo",
        email: "sancarbar@gmail"
    },
    status: "Ready",
    dueDate: "14-03-2021"},
	{id:2,
    description: "Laboratorio",
    responsible: {
        name: "Julián",
        email: "julian@mail.com"
    },
    status: "In Progress",
    dueDate: "13-03-2021"},
	{id: 3,
    description: "Tarea ",
    responsible: {
        name: "Julián",
        email: "julian@mail.com"
    },
    status: "In Progress",
    dueDate: "13-03-2021"},
	{id: 4,
    description: "Tarea 2 ",
    responsible: {
        name: "Julián",
        email: "julian@mail.com"
    },
    status: "In Progress",
    dueDate: "16-03-2021"}];
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      tasks
    })
  };

  callback(null, response);

};
