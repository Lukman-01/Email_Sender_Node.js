
exports.eMessage = async(name, email, subject, message) => {

   const html = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
        <title>Contact us response</title>
    </head>
    <body>
        <hi>Email from Zuri Node exercise</hi>

        <div>
            Name:${name}
            Email:${email}
            Subject:${subject}
            message:${message}
        </div>

    </body>
    </html>`
    return html;
}
   