var Config =
{
    "login": {
        "username": "cactus_dennis",
        "password": "Home@529"
    },
    "auth": {
        "access-token": "IGQVJWbUJKUE5LZAnpoVHpUSzZAhZAUtJc2J0TkUtTUVPT2Rja0xqMkJmclFWOVp4ck9OQS1qakhVdVk5aWZAsZAWRobnVhNUZA5R2o5RW41WE5Qekd6OFRpTTZABdHJES3Y1RVpOcU90R1NTNTFSU050MkRYZAwZDZD"
    },
    "api": 
    {
        "mock": false,
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;