using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using HandlebarsDotNet;
using MicroArchitecture.Account.Domain.Services.Email;
using MicroArchitecture.Account.Domain.Services.Email.Models;

namespace MicroArchitecture.Account.Infrastructure.Services.Email
{
    public class HandlerbarsRender : IEmailBodyRender
    {
        private readonly SemaphoreSlim _locker = new SemaphoreSlim(1, 1);
        private bool _registeredHelpersAndPartials;

        public async Task<string> RenderAsync<TModel>(string template, TModel model) where TModel : EmailMessage
        {
            await _locker.WaitAsync(100);
            try
            {
                await RegisterHelpersAndPartialsAsync();
            }
            finally
            {
                _locker.Release();
            }

            async Task<HandlebarsTemplate<object, object>> TemplateGetter()
            {
                var source = await ReadSourceAsync(template);
                return Handlebars.Compile(source);
            }

            var templateName = await TemplateGetter();
            return templateName?.Invoke(model);
        }

        private async Task RegisterHelpersAndPartialsAsync()
        {
            if (_registeredHelpersAndPartials)
            {
                return;
            }
            _registeredHelpersAndPartials = true;

            var baseHtmlSource = await ReadSourceAsync("BaseLayout");
            Handlebars.RegisterTemplate("BasicHtmlLayout", baseHtmlSource);
        }

        private static async Task<string> ReadSourceAsync(string templateName, bool htmlFormat = true)
        {
            var templatePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                "Services/Email/Layouts",
                $"{templateName}.{(htmlFormat ? "html.hbs" : "text.hbs")}");

            if (!File.Exists(templatePath))
            {
                throw new FileNotFoundException();
            }

            return await File.ReadAllTextAsync(templatePath);
        }
    }
}
