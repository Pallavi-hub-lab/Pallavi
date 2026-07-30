let browser = "Firefox";
switch(browser)
{
    case "Chrome":
    case "Edge":
    case "Brave":
    case "OPera":
            console.log("Chromium Project");
            break;
    case "Firefox":
            console.log("Mozilla Project");
            break;
    case "Safari":
            console.log("Apple browser - Uses Javascript Core Engine");
            break;
    default: 
            console.log("Unknown browser manual testing needed");                                
}