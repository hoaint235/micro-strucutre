using System;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MicroArchitecture.API.Domain.Services.Email;
using MicroArchitecture.API.Domain.Services.Email.Models;
using MicroArchitecture.API.Infrastructure.Services.Email.Models;
using Microsoft.Extensions.Options;
using MimeKit;

namespace MicroArchitecture.API.Infrastructure.Services.Email
{
    public class SmtpEmailService : IEmailService
    {
        private readonly IEmailBodyRender _mailBodyRender;
        private readonly SmtpConfiguration _smtpConfiguration;

        public SmtpEmailService(IEmailBodyRender mailBodyRender,
            IOptions<SmtpConfiguration> options)
        {
            _mailBodyRender = mailBodyRender;
            _smtpConfiguration = options?.Value;
        }


        public async Task SendAsync<TEmail>(TEmail email) where TEmail : EmailMessage
        {
            using var emailClient = new SmtpClient();
            var mimeMail = await ConvertToMimeMessage(email);

            emailClient.ServerCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true;

            await emailClient.ConnectAsync(_smtpConfiguration.Parameters.Host, _smtpConfiguration.Parameters.Port,
                _smtpConfiguration.Parameters.EnableSsl ? MailKit.Security.SecureSocketOptions.StartTls : MailKit.Security.SecureSocketOptions.Auto);

            await emailClient.AuthenticateAsync(_smtpConfiguration.Parameters.UserName, _smtpConfiguration.Parameters.Password);

            await emailClient.SendAsync(mimeMail);
            await emailClient.DisconnectAsync(true);
        }

        private async Task<MimeMessage> ConvertToMimeMessage(EmailMessage email)
        {
            Validation(email);

            var msg = new MimeMessage();

            msg.From.Add(new MailboxAddress(email.FromDisplayName ?? _smtpConfiguration.DefaultFromDisplayName,
                email.FromAddress ?? _smtpConfiguration.DefaultFromAddress));

            msg.Subject = email.Subject;

            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = await _mailBodyRender.RenderAsync(email.Template, email)
            };
            msg.Body = bodyBuilder.ToMessageBody();

            foreach (var mailTo in email.To)
            {
                msg.To.Add(MailboxAddress.Parse(mailTo));
            }

            if (email.Cc != null)
            {
                foreach (var mailCc in email.Cc)
                {
                    msg.Cc.Add(MailboxAddress.Parse(mailCc));
                }
            }

            return msg;
        }

        private static void Validation(EmailMessage email)
        {
            if (email == null)
            {
                throw new Exception("Check validate: Email is null");
            }

            if (email.To == null || !email.To.Any())
            {
                throw new Exception("Check validate: Email To is null");
            }
        }
    }
}
