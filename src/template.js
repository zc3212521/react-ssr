function template (data) {
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>hello world!</h1>
	<p>当前环境123123： ${data.env}</p>
</body>
</html>
    `
    return html
}

module.exports = template