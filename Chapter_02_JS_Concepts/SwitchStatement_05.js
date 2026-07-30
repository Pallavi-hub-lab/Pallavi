let test = 85;
switch(true)
{
    case (test >= 95):
        console.log("Outstanding - Top Performance");
        break;
    case (test >= 85):
    {
        console.log("Excellent - Above expectations");
        break;
    }
    case (test >= 70):
    {
        console.log("Good - Meets expectations");
        break;
    }
    case (test >= 50):
    {
        console.log("Needs - Improvement");
        break;
    }
    default: 
        console.log("Unsatisfactory - Require Trainig");
}