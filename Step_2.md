## Deploy this app to the cloud and complete S/4 HANA end to end, side-by-side extension CAPM application:

###
###
Made few changes in the CatalogSevice.js file:

<img width="1122" height="650" alt="image" src="https://github.com/user-attachments/assets/bc5eaea6-1b38-4ad2-97d0-b90a29b6f06f" />

###
Use command: npm install moment
Above command is a JavaScript library used for working with dates and times.
It helps you:

•	Format dates 

•	Parse dates 

•	Add/subtract days, months, years 

•	Compare dates

<img width="1122" height="546" alt="image" src="https://github.com/user-attachments/assets/52877ac4-ec24-49de-b736-8b3948710d69" />


###
###
Use command: cds watch

<img width="532" height="310" alt="image" src="https://github.com/user-attachments/assets/47c78c59-cf4a-494b-8dcc-f2f5e7de6d46" />

<img width="958" height="500" alt="image" src="https://github.com/user-attachments/assets/b5979ae8-3002-4f35-a837-d314a6a93e61" />

<img width="689" height="747" alt="image" src="https://github.com/user-attachments/assets/3cc066a8-b2a9-4bd8-89ac-dad168e9afcb" />

<img width="1122" height="384" alt="image" src="https://github.com/user-attachments/assets/98009fd7-6450-4bd0-a3cb-cde2de9b6759" />

<img width="1035" height="479" alt="image" src="https://github.com/user-attachments/assets/ad0204b5-eecd-4923-b8a9-9c7757fa3800" />

<img width="1088" height="684" alt="image" src="https://github.com/user-attachments/assets/958c7cfd-10a4-41fb-9b54-a4aaf36c7e90" />

<img width="1122" height="581" alt="image" src="https://github.com/user-attachments/assets/59e0c515-116d-4583-846e-e7f446a93eaf" />

###
###
TCode: VA02, New Sales Order successfully got created:

<img width="629" height="375" alt="image" src="https://github.com/user-attachments/assets/a7360ace-c94a-493d-acdd-3a2e8df86b29" />

<img width="1122" height="572" alt="image" src="https://github.com/user-attachments/assets/4b41b733-0b89-4f17-9c1a-82b3633bea9b" />

<img width="1122" height="551" alt="image" src="https://github.com/user-attachments/assets/ff5a2e04-4e91-4354-9be2-df12aad7e053" />

<img width="922" height="391" alt="image" src="https://github.com/user-attachments/assets/1d6cb996-4002-4c07-b341-0a900b7c0f77" />

<img width="1122" height="596" alt="image" src="https://github.com/user-attachments/assets/b81d4fc3-57d7-473b-a053-8f9d5fd3ca57" />

###
###
Use command: cf create-service destination lite mydest
This command creates an instance of the SAP Destination Service in your Cloud Foundry space.

<img width="1122" height="587" alt="image" src="https://github.com/user-attachments/assets/b05af621-57ee-4147-92d1-a6875a39328a" />

<img width="1122" height="495" alt="image" src="https://github.com/user-attachments/assets/35c5a927-6462-439b-a331-4f9f44441590" />

###
###
Use command: cf create-service-key mydest mydest-key
This command creates a Service Key for the Destination Service instance (mydest).
A Service Key contains the credentials and connection details that an application or developer can use to access the Destination Service.

<img width="1122" height="641" alt="image" src="https://github.com/user-attachments/assets/bcd5ae87-af1d-40b2-a52a-b53e39b37f70" />

<img width="1122" height="483" alt="image" src="https://github.com/user-attachments/assets/27345be9-d060-4976-b83a-bda3580e1e8f" />

###
###
Use command: cds bind -2 mydest:mydest-key
This command binds your local CAP application to the BTP Destination Service instance (mydest) using its Service Key (mydest-key).
It allows your local CAP application to use the Destination Service as if it were running on SAP BTP.
cds bind -2 mydest:mydest-key binds a local CAP application to an existing BTP Destination Service instance using its service key. This allows the application to access destinations from SAP BTP during local development.

<img width="939" height="568" alt="image" src="https://github.com/user-attachments/assets/6acf8d5b-8c54-4428-8696-3a65cf9552e4" />

<img width="586" height="440" alt="image" src="https://github.com/user-attachments/assets/0d263338-0fcd-470e-9870-8350fd313386" />
<img width="324" height="89" alt="image" src="https://github.com/user-attachments/assets/24b8cb8d-c1db-4ecc-8f5b-961900b42041" />
<img width="528" height="116" alt="image" src="https://github.com/user-attachments/assets/fe9ecd8b-95bf-448d-bffb-5c0cd5e7a56e" />

<img width="924" height="590" alt="image" src="https://github.com/user-attachments/assets/07d1552b-65a5-474a-82bc-2a1de5187906" />

###
###
URL, USER and PASSWORD no more required, after the use of command: cds bind -2 mydest:mydest-key
Just use destinationName:

<img width="879" height="556" alt="image" src="https://github.com/user-attachments/assets/537015d2-699b-452a-9fd3-6516f46e7d7d" />

###
###
Use command: cds watch –profile hybrid
This command starts your CAP application locally using the hybrid profile, allowing it to connect to SAP BTP services (such as Destination, XSUAA, HANA, etc.) instead of local mock services.

<img width="1122" height="515" alt="image" src="https://github.com/user-attachments/assets/8a5c4886-90a5-45d9-87d0-d029e4da4679" />

<img width="624" height="696" alt="image" src="https://github.com/user-attachments/assets/9077ff5d-37b8-45a2-9b6d-6c3113c68ab2" />

<img width="1122" height="747" alt="image" src="https://github.com/user-attachments/assets/2b53f4bd-5eb0-49d4-b8c7-27c74ae0cfd1" />

<img width="1117" height="878" alt="image" src="https://github.com/user-attachments/assets/8a8ff64a-1936-46fa-b3b5-e45f762ca3c6" />

###
###
Added the code from old project xs-secutiry.json file:

<img width="1122" height="480" alt="image" src="https://github.com/user-attachments/assets/33da2488-04a5-41a7-a681-7f812006ec4c" />

###
###
Mta.yaml file added:

<img width="770" height="669" alt="image" src="https://github.com/user-attachments/assets/ab789905-cf19-46d6-a9ae-4d3bae40cc9e" />

<img width="1122" height="629" alt="image" src="https://github.com/user-attachments/assets/dae8a8b6-b9cb-42ec-ab9f-7c1457e7a9c7" />

<img width="1113" height="513" alt="image" src="https://github.com/user-attachments/assets/27fdd145-082e-4e50-85bd-c87815bbe36b" />

<img width="1122" height="492" alt="image" src="https://github.com/user-attachments/assets/c81db028-f84f-40a5-b46e-8f09132877c3" />

<img width="1122" height="561" alt="image" src="https://github.com/user-attachments/assets/4c075b06-cd63-4009-801d-7e4eca4b8930" />

<img width="1122" height="628" alt="image" src="https://github.com/user-attachments/assets/ed8d75bc-3347-4f46-a8b5-191736ab0386" />

###
###
These instances created after above command: cf deploy capm_s4h_extrnl_01_1.0.0.mtar

<img width="1122" height="524" alt="image" src="https://github.com/user-attachments/assets/1fc34f78-f4f6-49a3-a3e1-82339630db12" />


###
###
Delete the broken service instance directly: cf delete-service capm_s4h_extrnl_01-db

If deployment is failing then make sure SAP HANA Cloud is already subscribed and instance is created. And SAP HANA Cloud Application is in Running state.
If capm_s4h_extrnl_01-db failed to created then use the below command:
Use command: cf deploy capm_s4h_extrnl_01_1.0.0.mtar --delete-services
This command deploys the MTAR file and automatically deletes any services that are no longer required by the application after deployment.

<img width="1122" height="496" alt="image" src="https://github.com/user-attachments/assets/f968a942-1536-4753-b28b-294266f47aa6" />

<img width="1122" height="361" alt="image" src="https://github.com/user-attachments/assets/a91df3ce-cb20-4157-80cc-cde912f40b50" />

<img width="1122" height="544" alt="image" src="https://github.com/user-attachments/assets/32cdaac5-2a98-465e-b522-06434af45657" />

###
###
###
🎉 Congratulations! Deployment was successful.
###
###
###

<img width="952" height="389" alt="image" src="https://github.com/user-attachments/assets/290a307f-bf3a-454c-bb25-76244fed9786" />

<img width="1122" height="586" alt="image" src="https://github.com/user-attachments/assets/092a72d5-fac8-4ebb-b2fc-1fbcdd145c27" />

<img width="1122" height="262" alt="image" src="https://github.com/user-attachments/assets/d94c078b-8dec-400f-930f-0ca23e6c0b72" />

<img width="907" height="511" alt="image" src="https://github.com/user-attachments/assets/cadf7b48-bce7-4dba-9903-e6300cde9e10" />

<img width="1122" height="103" alt="image" src="https://github.com/user-attachments/assets/bb791943-3bc7-4ae2-a026-4b44f5d9c536" />

<img width="801" height="806" alt="image" src="https://github.com/user-attachments/assets/78e0a7e3-4024-4b70-a596-2acfb0a12471" />

###
###
In the CatalogService.cds file we can add virtual element or extra attribute or field to do side-by-side extension of our CAPM Application.
###
###
#### This is how can Design and Develop an SAP BTP CAPM application to consume Sales Order Data from my company’s S/4HANA op-premise system. This is a Side-By-Side Extension in CAPM on SAP BTP. 
###
###
#### Done.




















































