export const operations = { "HeadscaleService_ListApiKeys": { "path": "/api/v1/apikey", "method": "get" }, "HeadscaleService_CreateApiKey": { "path": "/api/v1/apikey", "method": "post" }, "HeadscaleService_ExpireApiKey": { "path": "/api/v1/apikey/expire", "method": "post" }, "HeadscaleService_DebugCreateMachine": { "path": "/api/v1/debug/machine", "method": "post" }, "HeadscaleService_ListMachines": { "path": "/api/v1/machine", "method": "get" }, "HeadscaleService_RegisterMachine": { "path": "/api/v1/machine/register", "method": "post" }, "HeadscaleService_GetMachine": { "path": "/api/v1/machine/:machineId", "method": "get" }, "HeadscaleService_DeleteMachine": { "path": "/api/v1/machine/:machineId", "method": "delete" }, "HeadscaleService_ExpireMachine": { "path": "/api/v1/machine/:machineId/expire", "method": "post" }, "HeadscaleService_RenameMachine": { "path": "/api/v1/machine/:machineId/rename/:newName", "method": "post" }, "HeadscaleService_GetMachineRoutes": { "path": "/api/v1/machine/:machineId/routes", "method": "get" }, "HeadscaleService_SetTags": { "path": "/api/v1/machine/:machineId/tags", "method": "post" }, "HeadscaleService_MoveMachine": { "path": "/api/v1/machine/:machineId/user", "method": "post" }, "HeadscaleService_ListPreAuthKeys": { "path": "/api/v1/preauthkey", "method": "get" }, "HeadscaleService_CreatePreAuthKey": { "path": "/api/v1/preauthkey", "method": "post" }, "HeadscaleService_ExpirePreAuthKey": { "path": "/api/v1/preauthkey/expire", "method": "post" }, "HeadscaleService_GetRoutes": { "path": "/api/v1/routes", "method": "get" }, "HeadscaleService_DeleteRoute": { "path": "/api/v1/routes/:routeId", "method": "delete" }, "HeadscaleService_DisableRoute": { "path": "/api/v1/routes/:routeId/disable", "method": "post" }, "HeadscaleService_EnableRoute": { "path": "/api/v1/routes/:routeId/enable", "method": "post" }, "HeadscaleService_ListUsers": { "path": "/api/v1/user", "method": "get" }, "HeadscaleService_CreateUser": { "path": "/api/v1/user", "method": "post" }, "HeadscaleService_GetUser": { "path": "/api/v1/user/:name", "method": "get" }, "HeadscaleService_DeleteUser": { "path": "/api/v1/user/:name", "method": "delete" }, "HeadscaleService_RenameUser": { "path": "/api/v1/user/:oldName/rename/:newName", "method": "post" } } as const;