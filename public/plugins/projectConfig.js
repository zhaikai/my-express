define(function(require, exports, module){
    exports.config = {
        mk:{
            title:"mk",
            plugins:[

            ],
            AllowTypes:[
                "mk_feature",
                "enzyme_eme",
                "enzyme_plugin",
                "mk_war",
                "mk_metadata_feature",
                "mk_metadata_zip",
                "mk_frontend_feature",
                "mk_frontend_zip"
            ]
        },
        nectar:{
            title:'nectar',
            plugins:[

            ],
            AllowTypes:[
                "app",
                "app_plugin",
                "mdp",
                "enzyme_plugin"
            ]
        },
        abrazos:{
            title:'abrazos',
            plugins:[
                
            ],
            AllowTypes:[
                "enzyme_plugin",
                "abrazos_feature",
                "abrazos_zip"
            ]
        },
        default:{
            title:'default',
            plugins:[
                
            ],
            AllowTypes:[
                "mk_project",
                "abrazos",
                "enzyme_plugin",
                "app",
                "app_plugin",
                "mdp",
                "enzyme_eme"
            ]
        }
    }
})