 #### WELCOME ####

This is your copy of the SAPUI5 Master-Detail Freestyle Application Template.
You can find the template version in the .project.json - file in your workspace

Standalone runnable files (*.html) are located in the test-folder

This application is ready for client-side build in the SAP Web IDE and deployment to ABAP/HCP repositories

Documentation of all template-app features can be found in the SAPUI5 demokit here:
https://sapui5.hana.ondemand.com/#docs/guide/a460a7348a6c431a8bd967ab9fb8d918.html


 #### Happy Development! ####


 #################################################### ------- imported from zip ------- ####################################################
 select migration
 only had to fix this in the ui5.yaml

 -- migration of crud template via zip

1) change one

- path: /owi_hana_ow/owdata/weblog/weblog.xsodata/
            url: http://owhana01-owd:8000
            destination: owi_hana_ow


 - path: /owi_hana_ow
            pathPrefix: /
            url: http://owhana01-owd:8000
            destination: owi_hana_ow            

-- forgot to add launchpade so did not work when deployes

-- also may need to change xs-app.json in app router ???

{
  "authenticationMethod": "none",
  "routes": []
}

"routes": [
        
        {
            "source": "/owi_hana_ow/(.*)$",
            "target": "$1",
            "csrfProtection": false,
            "destination": "owi_hana_ow",
            "cacheControl": "public, max-age=432000,must-revalidate"
        }
        
    ]            