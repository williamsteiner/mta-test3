# mta-test3

notes on importing a project

example is weblog

1) created crud template in NEO and exported mta project

2) imported project into BAS and did migration
    changed ui5 yaml

    -- ui5 yaml

 backend:
          - path: /sap
            url: http://owhana01-owd:8000
            destination: owi_hana_ow
          - path: /owi_hana_ow
            pathPrefix: /
            url: http://owhana01-owd:8000
            destination: owi_hana_ow

3) then downloaded weblog project inside the mta_weblog project directory (just download the parent dir to the webapp dir)            

4) then go to project you want to import and right click on project mta dir and select import Project

5) after added - right click new proj app and click preview - should work

6) this does not auto add to the FLP config file

7) missing ui5-deploy.yaml - copied from hello3 and renamed name and archiveName (this creates the zip file in resources)

8) add nav to manifest - then see if you can add in FLP config

    ,
        "crossNavigation": {
            "inbounds": {
                "com-owi-webmin-weblog-inbound": {
                    "signature": {
                        "parameters": {},
                        "additionalParameters": "allowed"
                    },
                    "semanticObject": "weblog_obj",
                    "action": "weblog_action",
                    "title": "{{flpTitle}}",
                    "subTitle": "{{flpSubtitle}}",
                    "icon": ""
                }
            }
        }

9) now add i18n

flpTitle=Web Log
flpSubtitle=

10) note i did change the package.json file when I got a npm error building - but turns out issue was the missing ui5-deploy.yaml


