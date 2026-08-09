## How to call custom services or Third-party services or External API from the SAP BTP in CAPM? :


### [OData Test Service:](https://services.odata.org/https://services.odata.org/Experimental/OData/OData.svc/Products)

<img width="437" height="381" alt="image" src="https://github.com/user-attachments/assets/63ad1f40-23e3-47bf-835f-c508da4e4fc7" />

### [Download metadata of external API:](https://services.odata.org/Experimental/OData/OData.svc/$metadata)

<img width="832" height="214" alt="image" src="https://github.com/user-attachments/assets/77e2f2a2-422a-448a-9411-003eb2bb0c09" />

### [Download and save this NorthWind $metadata file:](https://services.odata.org/Experimental/OData/OData.svc/$metadata)

<img width="1122" height="519" alt="image" src="https://github.com/user-attachments/assets/d0a6ab3e-4bb2-487f-8fe8-4e0559a1ec2f" />

###
###
Then Upload the same NorthWind.edmx file in the project under srv folder:

<img width="1122" height="354" alt="image" src="https://github.com/user-attachments/assets/94777b03-aa83-4246-9b41-b3e2e9f5b024" />

<img width="1122" height="583" alt="image" src="https://github.com/user-attachments/assets/c84f3daf-5cdb-4fa8-8b2f-c4f429101a3b" />

###
###
New file ExternalService.cds has created and use command: cds add handler to create ExrernalService.js file.

<img width="1122" height="566" alt="image" src="https://github.com/user-attachments/assets/8a032581-f811-42ed-b4f1-515ee3a460a7" />

###
###
Added few changes in the ExternalService.js file:

<img width="1122" height="655" alt="image" src="https://github.com/user-attachments/assets/27b1e1a5-0d83-4c23-84b2-0fdc97c86191" />

<img width="1122" height="646" alt="image" src="https://github.com/user-attachments/assets/ca68861f-05c8-46a6-8c90-3432928a3fce" />

###
###
Added few changes in the package.json file:

<img width="1122" height="505" alt="image" src="https://github.com/user-attachments/assets/39f6f83d-5bc8-4e0a-96fb-14a07054dc04" />

###
###
Create destination ‘NorthWind_metadata’ by duplicating the S4HANA_2 destination for the existing attributes entries: 

<img width="1122" height="501" alt="image" src="https://github.com/user-attachments/assets/5f597960-0867-4252-b70f-9043125e51e2" />

<img width="1122" height="441" alt="image" src="https://github.com/user-attachments/assets/cf13182e-aec3-40c6-a43d-3a22f08eb2ee" />

###
###
Created Destinations backup for this project CAPM_S4H_EXTRNL_01:

<img width="504" height="314" alt="image" src="https://github.com/user-attachments/assets/3274c46a-6943-4878-8055-bc8bad74d787" />

###
###
small correction did here instead of ‘NorthWind’ changed to ‘NorthWind_metadata’:

<img width="857" height="441" alt="image" src="https://github.com/user-attachments/assets/26fb16fa-94ab-41fa-bd39-a516bdba3c89" />

###
###
Use command: cds watch

<img width="1122" height="641" alt="image" src="https://github.com/user-attachments/assets/34d4ac8a-53fc-4e2e-a698-1ac65ed06512" />

###
###
External service NorthWind is working:

<img width="1122" height="486" alt="image" src="https://github.com/user-attachments/assets/f8744ec5-feda-424f-98af-c3b9c018eeb5" />

<img width="1122" height="714" alt="image" src="https://github.com/user-attachments/assets/59273f13-07df-4f19-b286-8b6355b6bc51" />

###
###
#### This is how to call custom services or Third-party services or External API in the SAP BTP CAPM.
###
###
#### Done.
#### Finished.


















