let checkLogin = (user, password) => {
    if(user != "test" || password != "test")
    {
        console.log("Incorrect user/password");
    }
}


checkLogin("test", "badpassword");