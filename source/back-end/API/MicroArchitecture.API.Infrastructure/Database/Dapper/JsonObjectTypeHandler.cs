﻿using System;
using System.Data;
using Dapper;
using Newtonsoft.Json;

namespace MicroArchitecture.API.Infrastructure.Database.Dapper
{
    public class JsonObjectTypeHandler : SqlMapper.ITypeHandler
    {
        public void SetValue(IDbDataParameter parameter, object value)
        {
            parameter.Value = value == null
                ? DBNull.Value
                : JsonConvert.SerializeObject(value);
            parameter.DbType = DbType.String;
        }

        public object Parse(Type destinationType, object value)
        {
            return JsonConvert.DeserializeObject(value.ToString() ?? string.Empty, destinationType);
        }
    }
}
