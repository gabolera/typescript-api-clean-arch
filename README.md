<p align="center">

  <img src="./docs/images/logo.png" width="128">

</p>
  
# OPCLEAN
    
<p align="center">

  <br/>

  <img src="https://badgen.net/badge/node/%3E=16.14.0/green">
  <img src="https://badgen.net/badge/icon/typescript?icon=typescript&label">
  <img src="https://badgen.net/badge/icon/npm/red?icon=npm&label">

</p>

---

# The project

> **Warning**
> 🚧 Under construction

<br/>

This project is an start kit for api model in clean architecture using typescript to follow abstract concepts, to support any lib creating adapters and being happy 😀


## Folder structures

```
├── src
│   ├── app                       # Application logic and rules
│   │   ├── entities              # Entities of data 
│   │   ├── respositories         # Interface for repositories
│   │   └── use-cases             # Application use cases
│   ├── infra                     # General components
│   │   ├── core                  # Interface base for implementation on adapters
│   │   │   ├── adapters          # Adapters for libs into project
│   │   │   │   └── http          # Http libs adapters (Express, Koa, ...)
│   │   │   ├── interfaces        # Basic interfaces of the system
│   │   │   └── Route.ts          # Class for registering system routes
│   │   ├── database              # Database configurations
│   │   ├── routes                # Routes
│   │   └── server.ts             # Starting server file
│   ├── presentation              # Communication adapter between app and infra
│   |   ├── controller            # All Controllers
│   |   |   ├── Controller.ts     # Interface of Controller for implementations
│   |   |   └── ...               # Application controllers
│   |   ├── protocols             # All Controllers
│   |   |   └── HttpProtocol.ts   # Http return interface that every application must respect
├── .gitignore                    # Ignore file for git
├── .prettierrc                   # Prettier config 
├── package.json                  
├── package.lock.json            
├── README.md  
└── tsconfig.json                 # Project Typescript configuration file
```

