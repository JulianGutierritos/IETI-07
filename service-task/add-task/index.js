var tasks = [];

module.exports.add = (event, context, callback) => {
    var task = JSON.parse(event.body);
	tasks.push(task);
	task["id"] = tasks.length + 4;
    const responseMessage = { response: "Task created!", task};
    const response = {
		statusCode: 201,
		body: JSON.stringify({
			responseMessage
		})
	};
	callback(null, response); 
}
