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

