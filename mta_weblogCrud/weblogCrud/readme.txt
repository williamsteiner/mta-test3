 #### WELCOME ####

This is your copy of the SAPUI5 Master-Detail Freestyle Application Template.
You can find the template version in the .project.json - file in your workspace

Standalone runnable files (*.html) are located in the test-folder

This application is ready for client-side build in the SAP Web IDE and deployment to ABAP/HCP repositories

Documentation of all template-app features can be found in the SAPUI5 demokit here:
https://sapui5.hana.ondemand.com/#docs/guide/a460a7348a6c431a8bd967ab9fb8d918.html


 #### Happy Development! ####


 --------------- my notes --------------
 imported from NEO ide crud template of owdata weblogCrud
 export mta folder as zip
 imported from command line projects directory - clicked on welcome page import file
 only had to change ui5 and create a run config

 backend:
          - path: /sap
            url: http://owhana01-owd:8000
            destination: owi_hana_ow
          - path: /owi_hana_ow/owdata/weblog/weblog.xsodata/
            url: http://owhana01-owd:8000
            destination: owi_hana_ow


backend:
          - path: /sap
            url: http://owhana01-owd:8000
            destination: owi_hana_ow
          - path: /owi_hana_ow
            pathPrefix: /
            url: http://owhana01-owd:8000
            destination: owi_hana_ow         