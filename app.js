function showLogin(){

  splash.classList.add("hidden");

  login.classList.remove("hidden");
}

function toggleMenu(){

  menu.classList.toggle("hidden");
}

function showProfile(){

  alert(
    "Customer Profile"
  );
}

function showHelp(){

  alert(
    "Chat with admin:\nhelp@homnix.com"
  );
}

function bookService(service){

  alert(
    service +
    " booked successfully"
  );
}
