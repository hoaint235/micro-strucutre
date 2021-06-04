using System.Collections.Generic;
using System.Linq;
using MediatR;

namespace MicroArchitecture.Account.Infrastructure.Commons.Models
{
    public class ApiResult : ApiResult<Unit>
    {
        public ApiResult()
        {
        }

        public static ApiResult Ok()
        {
            return new ApiResult
            {
                IsSuccess = true
            };
        }
    }

    public class ApiResult<TResult>
    {
        public TResult Result { get; set; }
        public bool IsSuccess { get; set; }
        public List<ErrorCode> ErrorCodes { get; set; }

        public static ApiResult<TResult> Ok(TResult result)
        {
            return new ApiResult<TResult>
            {
                Result = result,
                IsSuccess = true,
            };
        }

        protected ApiResult BadRequest(string message)
        {
            return new ApiResult
            {
                IsSuccess = false,
                ErrorCodes = new List<ErrorCode>
                {
                    new ErrorCode
                    {
                        Code = message
                    }
                }
            };
        }

        protected ApiResult BadRequest(List<string> messages)
        {
            return new ApiResult
            {
                IsSuccess = false,
                ErrorCodes = messages.Select(message => new ErrorCode
                {
                    Code = message
                }).ToList()
            };
        }
    }

    public class ErrorCode
    {
        public string Code { get; set; }
        public string Target { get; set; }
        public string Message { get; set; }
    }
}
