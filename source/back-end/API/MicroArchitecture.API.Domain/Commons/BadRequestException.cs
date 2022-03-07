using System;
using System.Runtime.Serialization;

namespace MicroArchitecture.API.Domain.Commons
{
    public class BadRequestException : Exception
    {
        public BadRequestException() : base()
        {
        }

        public BadRequestException(string message) : base(message)
        {
        }

        public BadRequestException(string message, Exception exception) : base(message, exception)
        {
        }

        public BadRequestException(SerializationInfo serializationInfo, StreamingContext streamingContext) : base(serializationInfo, streamingContext)
        {
        }
    }
}
