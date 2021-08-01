FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

WORKDIR /src
COPY ["source/back-end/Account/MicroArchitecture.Account.API/.", "source/Account/MicroArchitecture.Account.API/"]
COPY ["source/back-end/Account/MicroArchitecture.Account.Domain/.", "source/Account/MicroArchitecture.Account.Domain/"]
COPY ["source/back-end/Account/MicroArchitecture.Account.Application/.", "source/Account/MicroArchitecture.Account.Application/"]
COPY ["source/back-end/Account/MicroArchitecture.Account.Infrastructure/.", "source/Account/MicroArchitecture.Account.Infrastructure/"]

RUN dotnet restore "source/Account/MicroArchitecture.Account.API/"
RUN dotnet restore "source/Account/MicroArchitecture.Account.Application/"
RUN dotnet restore "source/Account/MicroArchitecture.Account.Domain/"
RUN dotnet restore "source/Account/MicroArchitecture.Account.Infrastructure/"

COPY . .
WORKDIR "source/Account/MicroArchitecture.Account.API"
RUN dotnet build "MicroArchitecture.Account.API.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "MicroArchitecture.Account.API.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["dotnet", "MicroArchitecture.Account.API.dll"]