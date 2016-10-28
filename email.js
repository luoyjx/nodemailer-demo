var mailer        = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = mailer.createTransport(smtpTransport({
    host: 'smtp.gaoqixhb.com',
    port: 25,
    auth: {
        user: 'system@gaoqixhb.com',
        pass: 'your password'
    }
}));

var mailOptions = {
    from: '搞起博客 <system@gaoqixhb.com>', // 如果不加<xxx@xxx.com> 会报语法错误
    to: '1111@xx.com,222@xx.com,333@xx.com', // list of receivers
    subject: '这是一封测试邮件', // Subject line
    html: 'Hello world ！     <p> 这是一封用nodejs的nodemailer发送的测试邮件。</p> ' +
	'<p> 示例分享到了github上：<a href=\"https://github.com/luoyjx/nodemailer-demo\">https://github.com/luoyjx/nodemailer-demo</a></p>'// html body
};

transport.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});