import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'admin-user': {
                        table: 'x_snc_color_contro_user_credentials'
                        id: '33eab81a5af349e1832579e950880ef2'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '772f895a6b7547dfa93730ba095005e9'
                    }
                    'login-page': {
                        table: 'sys_ui_page'
                        id: 'f4a790557b30474a8f89c16768b0833a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '360ec572cdcc4df19fa47e4ed5f5acea'
                    }
                    'test-user': {
                        table: 'x_snc_color_contro_user_credentials'
                        id: '92631505e212415586807abad4c56cc1'
                    }
                    'x_snc_color_contro/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'e2a106c414394e1f8303277778abf2e4'
                        deleted: false
                    }
                    'x_snc_color_contro/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '69c75c2ba51c4f13b9b3aea0ab29bcee'
                        deleted: false
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '13bfecc7926c44e997c3615e3764e210'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'active'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '284342fdea2b444386707b9a2aeed750'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32cca200ede94b8ca3d3addda324d82b'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'is_admin'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '67a40b7d050a482ba5369b31ac3dd028'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '732ac63d058c4118803e802fb335afc7'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'password'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '868818a14b9b497c91784e39cd97ee1f'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'username'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '915555727a8b47f58080a8ef0d176425'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '915faa303ba34951a28d301959a97a50'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'password'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9562c85a9ba54ce38da7d821f078aa3a'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'is_admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b88ddbbc828d4afd9d04c2958db0a27f'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'username'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2afe6bd72df4809b9106f6885496da5'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6160698877f4844bcece0b40e997ec6'
                        key: {
                            name: 'x_snc_color_contro_user_credentials'
                            element: 'active'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
